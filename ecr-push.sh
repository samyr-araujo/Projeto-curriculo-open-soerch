#!/bin/bash
set -e

# ============================================
# Script para build e push da imagem para ECR
# ============================================

# Configurações - ALTERE conforme seu ambiente
AWS_REGION="us-east-1"
AWS_ACCOUNT_ID="SEU_ACCOUNT_ID"
ECR_REPO_NAME="ecommerce"
IMAGE_TAG="${1:-latest}"

ECR_URI="${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO_NAME}"

echo "🔐 Autenticando no ECR..."
aws ecr get-login-password --region ${AWS_REGION} | \
  docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com

echo "📦 Criando repositório (se não existir)..."
aws ecr describe-repositories --repository-names ${ECR_REPO_NAME} --region ${AWS_REGION} 2>/dev/null || \
  aws ecr create-repository \
    --repository-name ${ECR_REPO_NAME} \
    --region ${AWS_REGION} \
    --image-scanning-configuration scanOnPush=true \
    --image-tag-mutability MUTABLE

echo "🏗️  Construindo imagem..."
docker build --platform linux/amd64 -t ${ECR_REPO_NAME}:${IMAGE_TAG} .

echo "🏷️  Tagueando imagem..."
docker tag ${ECR_REPO_NAME}:${IMAGE_TAG} ${ECR_URI}:${IMAGE_TAG}
docker tag ${ECR_REPO_NAME}:${IMAGE_TAG} ${ECR_URI}:latest

echo "🚀 Enviando para ECR..."
docker push ${ECR_URI}:${IMAGE_TAG}
docker push ${ECR_URI}:latest

echo ""
echo "✅ Imagem publicada com sucesso!"
echo "   URI: ${ECR_URI}:${IMAGE_TAG}"
echo "   URI: ${ECR_URI}:latest"
