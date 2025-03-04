# Create the EC2 Instance
resource "aws_instance" "kttProd" {
  ami                    = "ami-04b4f1a9cf54c11d0" # Your existing Ubuntu AMI
  instance_type          = "t2.micro"
  key_name               = "kp001" # Ensure the key pair exists in AWS
  vpc_security_group_ids = ["sg-08507605b91f6df61"] # Your actual Security Group ID

  tags = {
    Name = "Prod"
  }
}

resource "aws_eip_association" "eip_assoc" {
  instance_id   = aws_instance.kttProd.id
  allocation_id = "eipalloc-044d37632e9594e75" # Replace with your actual Elastic IP allocation ID
}
