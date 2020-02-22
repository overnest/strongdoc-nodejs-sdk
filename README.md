# StrongDoc NodeJS SDK by StrongSalt

This is a NodeJS SDK for the [StrongDoc](https://api.strongsalt.com/) service, produced by StrongSalt.

## Publish

### Publish Patch Version
This will increment the patch version(0.0.x), tag the version in GitHub, and publish it to NPM repository.
    make pubpatch

### Publish Minor Version
This will increment the minor version(0.x.0), tag the version in GitHub, and publish it to NPM repository.
    make pubminor

### Publish Major Version
This will increment the major version(x.0.0), tag the version in GitHub, and publish it to NPM repository.
    make pubmajor

## How To Unpublish Package From NPM Registery
Normally we should not ever do this. But since the tools are acting up, here's the way to fix the problems that occur:
[Unpublish NPM Package](https://docs.npmjs.com/unpublishing-packages-from-the-registry)

## Known Bugs
### Requiring 2FA to publish.
We use np and npm to publish the SDK to the NPM repo. However, both of these tools require 2FA to work, and there is no way to disable them at the moment. Therefore, publishing to NPM is currently a manual job, since it would require someone to type in an OTP manually. 
1. [Install Authenticator](https://docs.npmjs.com/configuring-two-factor-authentication)
2. [NP Tool Bug 1](https://github.com/sindresorhus/np/issues/427)
3. [NP Tool Bug 2](https://github.com/sindresorhus/np/issues/398)
