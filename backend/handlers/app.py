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
        UpdateExpression="ADD visitor_count :inc"
    )

    item = table.get_item(Key={'resource': 'website'})
    views = item['Item']['visitor_count']
    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "https://niclaszll.de"
        },
        "body": json.dumps(views, indent=4, cls=DecimalEncoder)
    }
