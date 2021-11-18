import * as cdk from '@aws-cdk/core';

export interface CodesProps {
  // Define construct properties here
}

export class Codes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, props: CodesProps = {}) {
    super(scope, id);

    // Define construct contents here
  }
}
