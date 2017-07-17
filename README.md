# lambda-hook-proxy

A simple lambda (nodejs) script to forward API POST calls to a private subnet

## Requirements

- API Gateway and AWS lambda
- `request` and `request-debug` npm modules

## AWS Lambda Setup

1. Create an AWS Lambda function
2. Ensure the Lambda function is tied to a VPC and subnet
  a. this is required in order to communicate with the private subnet
3. Download the `request` and `request-debug` npm modules and save them to this directory
  a. `npm install --prefix=[directory] aws-sdk`
4. zip the directory `zip -r [name].zip *` and upload it to Lambda
5. Create an Environment Variable call `ENDPOINT` and for the value enter the address to forward the HTTP requests in the private subnet
6.

## AWS Gateway Setup

1. Make sure the Lambda function is tied to an API Gateway (navigate to Triggers in Lambda)
  a. you may need to create a new API
2. Create a Resource and then under actions click `create method` to create a `POST` methos
3. In the Method Execution menu, under Integration Request click `Use Lambda Proxy Integration`
4. Deploy the API and test it

## Resources

- https://aws.amazon.com/blogs/compute/using-api-gateway-with-vpc-endpoints-via-aws-lambda/
- http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-set-up-simple-proxy.html
