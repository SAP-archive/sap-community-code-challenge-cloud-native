# SAP Community Code Challenge Cloud Native - Challenges

On this page you will get a new challenge based on this repository and the SAP BTP, Kyma runtime each week. These challenges must be concluded and the submission fulfilled in order to have your submission count towards the month's total progression. Each week the type of submission might look different so be aware of that. Read the challenges for each week carefully and most importantly **Have fun! 😊**

## Week 1 (July 6th, 2022  - July 13th, 2022)

This week's challenge is all about understanding and getting to know Kubernetes and setting up your SAP BTP, Kyma environment.

Parts of the challenge for this week are educational and some are hands-on where you will deploy your first containerized service to the SAP BTP, Kyma runtime. So let's get started:

1. Watch the videos of the [2minOf Cloud Native series](https://youtube.com/playlist?list=PL6RpkC85SLQCwaJ54TAAHMvSl5wpVPrai) on YouTube.
1. Sign-up for Free Tier on SAP BTP with [Get an Account on SAP BTP to Try Out Free Tier Service Plans](https://developers.sap.com/tutorials/btp-free-tier-account.html).
1. Use SAP BTP to enable the SAP BTP, Kyma runtime.
1. Fork and clone this repository to run and test the provided service locally (you should have already done this in the setup phase - see the [Setup and Participation](README.md#setup-and-participation) section).
1. Follow the [secret setup](/Create_K8S_Secret.md) to set up a Kubernetes secret containing credentials with which an image can be pulled from the GitHub Container Registry (in the next step).
1. Deploy and run the provided service on SAP BTP, Kyma runtime using the Kyma Console UI or the `kubectl` Command Line Interface. The already containerized service is available through this repository! [SAP Community Code Challenge Cloud Native - Service Package](https://github.com/SAP-samples/sap-community-code-challenge-cloud-native/pkgs/container/sap-community-code-challenge-cloud-native). You'll need to have the secret set up in the previous step for this.

> NOTE: If you need help deploying the service you can take a look at the following resources:
> * [Using kubectl to Create a Deployment](https://kubernetes.io/docs/tutorials/kubernetes-basics/deploy-app/deploy-intro/)
> * [Deploy to Kubernetes](https://docs.docker.com/get-started/kube-deploy/)
> ```console
> kubectl apply -n <namespace> -f <path-to-deployment.yaml>
> ```

&#8594; **Submission:** Post a **screenshot** of your deployed service as well as the **Service URL** in the [SAP Community Code Challenge - Let's set sail for Cloud Native Island!](https://groups.community.sap.com/t5/application-development/sap-community-code-challenge-let-s-set-sail-for-cloud-native/m-p/5748/thread-id/60) thread.

## Week 2 (July 13th, 2022 - July 20th, 2022)

In this week's challenge you have to containerize your own service and deploy it to the SAP BTP, Kyma runtime. Use the forked repository to create your project and needed files, open a Pull Request when you're done.

1. Create your own service within the forked repository. The project doesn't have to be anything complicated, it can be a simple Hello World app. You're free to use whatever programming language you feel comfortable with (Node.js, JavaScript, GoLang, CAP, etc.).
1. Containerize your service using a container technology like Docker, Podman, etc.
1. Write a [deployment.yaml](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) for your containerized service.
1. Deploy your service to the SAP BTP, Kyma runtime. It is okay to delete the old deployment (Week 1) if you want to.

&#8594; **Submission:** Post a **screenshot** of your deployed service as well as the **deployment.yaml** in the [SAP Community Code Challenge - Let's set sail for Cloud Native Island!](https://groups.community.sap.com/t5/application-development/sap-community-code-challenge-let-s-set-sail-for-cloud-native/m-p/5748/thread-id/60) thread.
