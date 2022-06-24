# Create a Kubernetes Secret

In order to successfully deploy the provided service to the SAP BTP, Kyma runtime it is necessary to create a [Kubernetes Secret](https://kubernetes.io/docs/concepts/configuration/secret/) and make it available in the cluster. This is due to the way GitHub Container Registry works. GitHub requires your cluster to authenticate against the Container registry in order to pull the package into your Kubernetes deployment.

This guide walks you through what you need to do.

1. Follow the [Install the Kubernetes Command Line Tool](https://developers.sap.com/tutorials/cp-kyma-download-cli.html) to setup [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) (see note below) and make a secure connection to your SAP BTP, Kyma cluster.
1. Create a GitHub Personal Access Token which is needed to authenticate against the GitHub Container Registry. Follow the [Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) guide to do so, and make sure you check the "read:packages" checkbox when specifying the scopes to include. Copy your token for the next step.

> Even if you have `kubectl` installed, you may need to follow the tutorial completely, as using Kyma requires you to use OIDC Connect and you need a plugin for your `kubectl` CLI tool to make this work. There is a step in the tutorial that covers this.

Now use the following command to create the Kubernetes secret for your cluster, substituting appropriate values for the placeholders:

```console
kubectl create secret docker-registry regcred \
  --namespace <k8s-namespace> \
  --docker-server=ghcr.io \
  --docker-email=<github-email-address> \
  --docker-username=<github-username> \
  --docker-password=<github-personal-access-token>
```

The `ghcr.io` value refers to the GitHub Container Registry, and `regcred` (short for "registry credentials") is the name of the secret. The placeholders are described thus:

* `<k8s-namespace>`: Select your desired namespace, if you haven't created a designated namespace it should be `default`.
* `<github-email-address>`: Specify your GitHub email address.
* `<github-username>`: Specify your GitHub username.
* `<github-personal-access-token>`: Paste in the value of the personal access token (PAT) that you just generated.

If the creation was successful you should see the following output:

```console
secret/regcred created
```

In the SAP BTP, Kyma console UI, navigate to you namespace and you should see the secret being created withing the **Configuration/Secret** menu:

![Kubernetes Secret](/images/Kyma_Secret.png)
