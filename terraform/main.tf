terraform {
  # backend "remote" {
  #   organization = "your_organization"
  #   workspaces {
  #     name = "api-example"
  #   }
  # }

  backend "local" {

  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}


