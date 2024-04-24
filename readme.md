Link to github: https://github.com/krissaint/ShoeBing
# Clone the repo
git clone https://github.com/krissaint/ShoeBing.git

# Install all package & Library in this project 
npm install
# Check the dependency
npm install bcryptjs dotenv express express-async-handler jsonwebtoken mongoose morgan

npm install -D concurrently nodemon

# Create .env file in server folder and paste this variables
        PORT = 5000
        MONGO_URI = “your mongo url”
        NODE_ENV = development
        JWT_SECRET = shoeshop
        PAYPAL_CLIENT_ID = “your PayPal client id”

# Sign in in mongo dB and create project in mongo dB to get mongo url and then paste the url in .env file in MONGO_URI 
# Your mongo url will first look like this: 
mongodb+srv://admin:password@shoeshop1.kkca3w7.mongodb.net/?retryWrites=true&w=majority
# Then you can paste the password and your mongo url will look like this:
MONGO_URL = mongodb+srv://admin:admin123456@shoeshop1.kkca3w7.mongodb.net/shoeDatabase?retryWrites=true&w=majority

# Sign in in paypal and to get paypal client id to paste it in .env file in PAYPAL_CLIENT_ID

# Download and open postman choose POST method and run 
http://localhost:5000/api/import/user 
http://localhost:5000/api/import/products 
# Choose GET as method and run 
http://localhost:5000/api/products 

# Open folder "server" in terminal
npm start server
# Open folder "client frontend" in terminal
npm start

