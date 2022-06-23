# SAP Community Code Challenge Cloud Native - Challenges

On this page you will get a new challenge based on this repository and the SAP BTP, Kyma runtime each week. These challenges must be concluded and the submission fullfiled in order to have your submission count towards progression of the challenge. Each week the type of submission might look different so be aware of that. Read the challenges for each week carefully and most important **Have fun! 😊**

## Week 1 (July 6th, 2022  - July 13th, 2022)
This weeks challenge is all about understanding and getting to know Kubernetes and setting up your SAP BTP, Kyma environment.

Parts of the challenge for this week are educational and some are hands-on where you will deploy your first containerized service to the SAP BTP, Kyma runtime. So let's get started:

1. Watch the videos of the 2minOf Cloud Native series on YouTube.
1. Sign-up for Free Tier on SAP BTP with [Get an Account on SAP BTP to Try Out Free Tier Service Plans](https://developers.sap.com/tutorials/btp-free-tier-account.html).
1. Use SAP BTP to enable the SAP BTP, Kyma runtime.
1. Fork and clone this repository to run and test the provided service locally.
1. Deploy and run the provided service on SAP BTP, Kyma runtime using the Kyma Console UI. The already containerized service is available through this repository! [SAP Community Code Challenge Cloud Native - Service Package](https://github.com/SAP-samples/sap-community-code-challenge-cloud-native/pkgs/container/sap-community-code-challenge-cloud-native). You need to have a Kubernetes [Secret setup](/Create_K8S_Secret.md) in order to successfully pull the container from GitHub.

&#8594; **Submission:** Post a **screenshot** of your deployed service as well as the **Service URL** in the [SAP Community Coffee Corner thread](https://groups.community.sap.com/t5/coffee-corner/). If you completed the **Advanced Task** on Step 6, provide a screenshot of the CLI output as well.

## Week 2 (July 13th, 2022 - July 20th, 2022)
In this weeks challenge you have to containerize your own service and deploy it to the SAP BTP, Kyma runtime. Use the forked repository to create your project and needed files, open a Pull Request when you're done.

1. Create your own service within the forked repository. The project doesn't have to be anything complicated, it can be a simple Hello World app. You're free to use whatever programming language you feel comfortable with (Node.js, JavaScript, GoLang, CAP, etc.).
1. Containerize your service using a container technology like Docker, Podman, etc.
1. Write a [deployment.yaml](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) for your containerized service.
1. Deploy your service to the SAP BTP, Kyma runtime. It is okay to delete the old deployment (Week 1) if you want to.

&#8594; **Submission:** Post a screenshot of your deployed service as well as the **deployment.yaml** in the [SAP Community Coffee Corner thread](https://groups.community.sap.com/t5/coffee-corner/).

## Week 3 (July 20th, 2022 - July 27th, 2022)
For last weeks challenge you have created your own small service, containerized it and deployed it to the SAP BTP, Kyma runtime. But a service is no good if you can't connect to it. This week is all about using APIRules and securing the connection.

1. Read the official documentation to [Expose and Secure a Workload with a JSON Web Token](https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/44bb2d3596554bf4b94ea344e40937dd.html?q=api%20rules).
1. Expose and secure your deployed service.

&#8594; **Submission:** Provide the service URL in the [SAP Community Coffee Corner thread](https://groups.community.sap.com/t5/coffee-corner/). **IMPORTANT:** Do not post or send your security configuration, tokens, passwords or any other security related information. It is enough for us if we see that we can't access the service because of *unauthorized*.

## Week 4 (July 27th, 2022 - Aug 03th, 2022)
Wow! You're almost there. The true power of Kubernetes is that it has self-healing and autoscaling capabilities so your services and applications are always available to your users at any time. For this weeks challenge you will takle exactly that!

1. Re-deploy your service or remove authentication from it in order for us to be able to access your service.
1. Use the Horizontal Autoscaler feature of SAP BTP, Kyma runtime.
1. Make sure to increase your Pod-count to at least 10.

&#8594; **Submission:** Provide the service URL in the [SAP Community Coffee Corner thread](https://groups.community.sap.com/t5/coffee-corner/) and pass our stress testing. Additional provide a screenshot of your running pods.
