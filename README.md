# CI/CD Demo Project

This repository demonstrates a CI/CD pipeline for deploying a containerized application to a Kubernetes cluster. The pipeline automates testing, building, and deploying the application using GitHub Actions.

---

## Features

- **CI/CD Pipeline**: Automates testing, building Docker images, and deploying to Kubernetes.
- **Kubernetes Deployment**: Manages application deployment and service configuration.
- **Docker Integration**: Builds and pushes Docker images to Docker Hub.
- **Environment Variables**: Uses GitHub Secrets for secure configuration.
- **Rollout Management**: Waits for successful Kubernetes deployment rollouts.

---

## Prerequisites

Before using this project, ensure you have the following:

1. **Docker**: Installed and running on your machine.
2. **Kubernetes Cluster**: A running Kubernetes cluster (local or cloud-based).
3. **kubectl**: Installed and configured to access your Kubernetes cluster.
4. **GitHub Secrets**:
   - `DOCKERHUB_USERNAME`: Your Docker Hub username.
   - `DOCKERHUB_TOKEN`: Your Docker Hub access token.
   - `KUBECONFIG`: The kubeconfig file for your Kubernetes cluster.

---

## Project Structure

- **`cicd.yaml`**: GitHub Actions workflow file for CI/CD.
- **`deployment.yaml`**: Kubernetes manifest for deploying the application.
- **`service.yaml`**: Kubernetes manifest for exposing the application as a service.
- **Application Code**: The source code for the application (e.g., `app.js`, `main.py`).

---

## How It Works

1. **Pipeline Triggers**:
   - The pipeline runs on `push` or `pull_request` events to the `master` branch.

2. **Pipeline Steps**:
   - **Checkout Code**: Fetches the latest code from the repository.
   - **Run Tests**: Executes unit tests to ensure code quality.
   - **Build Docker Image**: Builds a Docker image and pushes it to Docker Hub.
   - **Update Kubernetes Manifests**: Updates the deployment manifest with the latest Docker image SHA.
   - **Deploy to Kubernetes**: Applies the Kubernetes manifests to the cluster.
   - **Wait for Rollout**: Ensures the deployment is successfully rolled out.

3. **Deployment**:
   - The application is deployed to the Kubernetes cluster and exposed via a service.

---

## Usage

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/cicd-demo.git
cd cicd-demo