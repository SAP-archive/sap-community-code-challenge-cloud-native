# Create a Kubernetes Secret

In order to successfully deploy the provided service to the SAP BTP, Kyma runtime it is necessary to create a [Kubernetes Secret](https://kubernetes.io/docs/concepts/configuration/secret/) to the cluster. This is due to the way GitHub Container Registry works. GitHub requires your cluster to authenticate against the Container registry in order to pull the package into your Kubernetes deployment. 

This guide walks you through the necessary steps for a successful deployment of the containerized service.

1. Follow the [Install the Kubernetes Command Line Tool](https://developers.sap.com/tutorials/cp-kyma-download-cli.html) to setup [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) and make a secure connection to your SAP BTP, Kyma cluster.
1. Create a GitHub Personal Access Token which is needed to authenticate against the GitHub Container Registry. Follow the [Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) guide to do so. Make sure you copy your token for the next step.
1. Now open your Terminal, Windows Bash or any other CLI you're using to create the Kubernetes secret for your cluster.

```console
kubectl -n <k8s-namespace> 
create secret docker-registry regcred --docker-server=ghcr.io 
--docker-username=<github-username> --docker-password=<github-personal-access-token> --docker-email=<github-email-address>
```

* `kubectl -n <k8s-namespace>`: Select your desired namespace, if you haven't created a designated namespace it should be `default`.
* `create secret docker-registry regcred `: This will create a new docker registry secret with the name `regcred`.
* `--docker-server=ghcr.io`: This defines the docker server, in our case the GitHub Container Registry.
* `--docker-username=<github-username>`: Set your GitHub username.
* `--docker-password=<github-personal-access-token>`: Paste your PAT.
* `--docker-email=<github-email-address>`: Set your GitHub email address.

If the creation was successful you should see the following output:

```console
secret/regcred created
```

In the SAP BTP, Kyma console UI you should see the secret being created:

![Kubernetes Secret](/images/Kyma_Secret.png)