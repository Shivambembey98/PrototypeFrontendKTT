terraform {
  backend "s3" {
    bucket         = "statefilebackup98" # Replace with your bucket name
    key            = "terraform.tfstate"
    region         = "us-east-1"
  }
}
