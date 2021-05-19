import boto3
import json
import decimal

# solution to serialize decimal in json from https://stackoverflow.com/a/3885198/7295614
class DecimalEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, decimal.Decimal):
            return str(o)
        return super(DecimalEncoder, self).default(o)

table = boto3.resource('dynamodb').Table('ResumeCounterTable')

def lambda_handler(event, context):
    response = table.update_item(
        Key={'resource': 'website'},
        ExpressionAttributeValues={':inc': decimal.Decimal(1)},
        UpdateExpression="ADD visitor_count :inc",
        ReturnValues="UPDATED_NEW"
    )
    
    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "https://niclaszll.de"
        },
        "body": json.dumps(response['Attributes']['visitor_count'], indent=4, cls=DecimalEncoder)
    }
