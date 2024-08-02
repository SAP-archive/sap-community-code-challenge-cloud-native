## Deprecation Notice

This public repository is read-only and no longer maintained.

![](https://img.shields.io/badge/STATUS-NOT%20CURRENTLY%20MAINTAINED-red.svg?longCache=true&style=flat)

---

# SAP Community Code Challenge - Cloud Native
[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/sap-community-code-challenge-cloud-native)](https://api.reuse.software/info/github.com/SAP-samples/sap-community-code-challenge-cloud-native)
[![Updated Badge](https://badges.pufler.dev/updated/SAP-samples/sap-community-code-challenge-cloud-native)](https://badges.pufler.dev)
[![Contributors Display](https://badges.pufler.dev/contributors/SAP-samples/sap-community-code-challenge-cloud-native)](https://badges.pufler.dev)

This repository is the starting point for the SAP Community Code Challenge for Cloud Native (see [SAP Community Application Development thread](https://groups.community.sap.com/t5/application-development/sap-community-code-challenge-let-s-set-sail-for-cloud-native/m-p/5748#M60) and [corresponding blog post](https://blogs.sap.com/2022/07/04/sap-community-code-challenge-lets-set-sail-for-cloud-native-island/)). It contains everything you need to get a basic [Node.js](https://nodejs.org/) based project deployed as a service to a Kubernetes based runtime.

That means you get the Node.js related files of the service, a [Dockerfile](https://docs.docker.com/engine/reference/builder/) and a [Deployment.yaml](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) file. If you're like "Oh Gosh, what is he talking about?" - No worries we will get to what all of that means.

The goal for this month's Coding Challenge is to bring the world of [Kubernetes](https://kubernetes.io), Containerization and the [SAP BTP, Kyma runtime](https://discovery-center.cloud.sap/serviceCatalog/kyma-runtime) closer to you so you have an easier start with the world of Cloud Native development.

## Setup and Participation

To be able to take part in this challenge, it's essential that you first complete the following steps:

1. Fork this repository.
1. Clone the forked repository into your development environment.
1. Navigate into the `service/` folder.
1. Execute `npm install` to install the project's dependencies.
1. Run `npm start` in order to test the project locally.
1. To try out if the service runs correctly open a web browser and type in
   1. `http://localhost:8080`
   2. `http://localhost:8080/greeting/<Your Name>`

> The default port used in this local setup is 8080; you can specify a different one (e.g. 8000) if you need to, like this: `PORT=8000 npm start`

In order to complete each of the challenges, you need to:

1. Look into the [Challenges](Challenges.md) file to see what the challenge is each week.
2. Depending on the challenge, you may need to submit information on the [SAP Community Application Development thread](https://groups.community.sap.com/t5/application-development/sap-community-code-challenge-let-s-set-sail-for-cloud-native/td-p/5748). Check the [Challenges](Challenges.md) file to see what is required.

Because the challenges are there to give you an introduction to Cloud Native technologies like Kubernetes, Containers and the SAP BTP, Kyma runtime the service being provided is deliberately basic. This is so that you can focus more on understanding the fundamentals of this fairly complex topic. No worries there is more then enough content ready for you to feel like a Kubernetes pro after these 4 weeks! 🧑‍💻 😉

You can find the challenges for each week in the [Challenges](Challenges.md) file.

## Requirements

* Node.js version 16.x ([https://nodejs.org/en/download/](https://nodejs.org/en/download/)).
* Free Tier Account on SAP Business Technology Platform (see [Get an Account on SAP BTP to Try Out Free Tier Service Plans](https://developers.sap.com/tutorials/btp-free-tier-account.html))
* The SAP BTP, Kyma runtime enabled (see [Enable the SAP BTP, Kyma runtime](https://developers.sap.com/tutorials/cp-kyma-getting-started.html)).
* In this project we use [Docker](https://www.docker.com) but feel free to use any other container technology, note that if you do you can't use the `Dockerfile` provided.

## Download and Installation

See [Setup and Participation](#setup-and-participation).

## Recommended Learning

There is quite a lot to digest when working in the world of Cloud Native, but no worries we got you covered. If you need an introduction or just a refresher on different aspects of Kubernetes or Containerization you should check out the [2minOf Cloud Native](https://youtube.com/playlist?list=PL6RpkC85SLQCwaJ54TAAHMvSl5wpVPrai) series on the SAP Developers YouTube channel.

[![2min Of Cloud Native](https://user-images.githubusercontent.com/9074514/174777083-eec57898-f110-4151-b131-242c43c85dc5.jpg)](https://youtube.com/playlist?list=PL6RpkC85SLQCwaJ54TAAHMvSl5wpVPrai)

These resources may also be helpful:

* [SAP BTP, Kyma runtime Tutorials](https://developers.sap.com/tutorial-navigator.html?tag=software-product%3Atechnology-platform%2Fsap-business-technology-platform%2Fsap-btp-kyma-runtime)
* ["What is Kyma?" - SAP Community Blog Post](https://blogs.sap.com/2019/07/08/what-is-kyma/)
* [SAP BTP, Kyma runtime Extension examples](https://github.com/SAP-samples/kyma-runtime-extension-samples)
* [Docker, Build Images](https://docs.docker.com/language/nodejs/build-images/)
* [Publishing Docker Images to GitHub Packages](https://docs.github.com/en/actions/publishing-packages/publishing-docker-images)

## Known Issues

No known issues.

## How to obtain support

[Create an issue](https://github.com/SAP-samples/<repository-name>/issues) in this repository if you find a bug or have questions about the content.

For additional support, [ask a question in SAP Community](https://answers.sap.com/questions/ask.html).

## Contributing

If you wish to contribute code, offer fixes or improvements, please send a pull request. Due to legal reasons, contributors will be asked to accept a DCO when they create the first pull request to this project. This happens in an automated fashion during the submission process. SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).

## License

Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSE) file.
