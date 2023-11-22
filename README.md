# cloudfront-function-uri-rewrite-cdk

## 0. Prerequisite

```
$ aws --version
aws-cli/2.4.27 Python/3.8.8
```

```
$ node -v
v18.17.0
```

```
$ npm -v
9.67.2
```

## 1. How to run cdk locally

- Set your profile in your local env
- Run `npm install`

### Bootstrap (First time only)
Please run this command first to bootstrap. Only one time is enough.

```
npx cdk bootstrap --profile {your profile}
```

### Diff
Please use this command if you want to check the differences of resources after you update your CDK.

```
npx cdk diff --profile {your profile}
```

### Deploy
Please use this command if you want to deploy.

```
npx cdk deploy --profile {your profile}
```

### Destroy
Please use this command if you want to destroy all resourced created by CDK.

```
npx cdk destroy --profile {your profile}
```

## 2. Verification

- Access to `https://${the distribution domain name}`. You can confirm the content stored `./lib/assets/s3/index.html`.
- Access to `https://${the distribution domain name}/subdir/`. You can confirm the content stored `./lib/assets/s3/subdir/index.html`.