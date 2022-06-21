# SAP Community Code Challenge - Cloud Native
[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/sap-community-code-challenge-cloud-native)](https://api.reuse.software/info/github.com/SAP-samples/sap-community-code-challenge-cloud-native)
[![Visits Badge](https://badges.pufler.dev/visits/SAP-samples/sap-community-code-challenge-cloud-native)](https://badges.pufler.dev)
[![Updated Badge](https://badges.pufler.dev/updated/SAP-samples/sap-community-code-challenge-cloud-native)](https://badges.pufler.dev)
[![Contributors Display](https://badges.pufler.dev/contributors/SAP-samples/sap-community-code-challenge-cloud-native)](https://badges.pufler.dev)

This repository is the starting point for the SAP Community Code Challenge for Cloud Native (see [SAP Community Coffee Corner thread]() and [corresponding blog post]()). The repository contains a basic Hello-World type [Node.js](https://nodejs.org/en/) project which has a everything included which you need to deploy that service to a Kubernetes based runtime. That means you get the Node.js related files of the service, a [Dockerfile](https://docs.docker.com/engine/reference/builder/) and a [Deployment.yaml](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) file. If you're like "Oh Gosh, what is he talking about?" - No worries we will get to what all of that means. The goal for this months Coding Challenge is to bring the world of [Kubernetes](https://kubernetes.io), Containerization and the [SAP BTP, Kyma runtime](https://discovery-center.cloud.sap/serviceCatalog/kyma-runtime) closer to you so you have an easier start with the world of Cloud Native development.

## Participation
Complete the following steps to take part in the challenge:

1. Fork this repository.
2. Clone the forked repository into your development environment.
3. Execute `npm install` to install the project's dependencies.
4. Open a pull request to the base repository.
5. Copy the URL of your pull request and paste it into the [SAP Community Coffee Corner thread](https://groups.community.sap.com/t5/coffee-corner/sap-community-code-challenge-testing-ui5-apps-with-wdi5/td-p/5229).

As this challenge is there to give you an easier start with Cloud Native technologies like Kubernetes, Containers and the SAP BTP, Kyma runtime the service being provided is really basic. You should focus more on understanding all the basics of this fairly complex topic. No worries there is more then enough content ready for you to feel like a Kubernetes pro after these 4 weeks! 🧑‍💻 😉

You can find the challenges for each week in the [Challenges](Challenges.md) file.

## Requirements
* Node.js version 16.x ([https://nodejs.org/en/download/](https://nodejs.org/en/download/)).
* Free Tier Account on SAP Business Technology Platform  
  ([Get an Account on SAP BTP to Try Out Free Tier Service Plans](https://developers.sap.com/tutorials/btp-free-tier-account.html))
* [Enable the SAP BTP, Kyma runtime](https://developers.sap.com/tutorials/cp-kyma-getting-started.html)

## Download and Installation
See [Participation](#participation).

## Recommended Learning

There is quite a lot to digest when working in the world of Cloud Native, but no worries we got you covered. If you need an introduction or just a refreshment on different aspects of Kubernetes or Containerization you should check out the [2minOf Cloud Native](https://youtube.com/playlist?list=PL6RpkC85SLQCwaJ54TAAHMvSl5wpVPrai) series on the SAP Developers YouTube channel.

[![2min Of Cloud Native](https://user-images.githubusercontent.com/9074514/174771901-d2928ac4-856a-4847-912c-8a7a8233f91a.jpg)](https://youtube.com/playlist?list=PL6RpkC85SLQCwaJ54TAAHMvSl5wpVPrai)

Other recommended learning is:

* [SAP BTP, Kyma runtime Tutorials](https://developers.sap.com/tutorial-navigator.html?tag=software-product%3Atechnology-platform%2Fsap-business-technology-platform%2Fsap-btp-kyma-runtime)
* ["What is Kyma?" - SAP Community Blog Post](https://blogs.sap.com/2019/07/08/what-is-kyma/)
* [SAP BTP, Kyma runtime Extension examples](https://github.com/SAP-samples/kyma-runtime-extension-samples)

## Known Issues
No known issues.

## How to obtain support
[Create an issue](https://github.com/SAP-samples/<repository-name>/issues) in this repository if you find a bug or have questions about the content.
 
For additional support, [ask a question in SAP Community](https://answers.sap.com/questions/ask.html).

## Contributing
If you wish to contribute code, offer fixes or improvements, please send a pull request. Due to legal reasons, contributors will be asked to accept a DCO when they create the first pull request to this project. This happens in an automated fashion during the submission process. SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).

## License
Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSE) file.
