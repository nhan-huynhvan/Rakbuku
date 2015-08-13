# APT Linux Preperation (Ubuntu)
echo "Update Ubuntu"
sudo apt-get update -y
sudo apt-get -y install curl build-essential openssl libssl-dev git 

#Ruby
echo "Install Ruby"
if [[ "$(ruby --version)" ]]; then
	echo "Docpad is installed"
fi
	sudo apt-get -y install ruby 1.9.3
	cd /etc/alternatives
	sudo ln -sf /usr/bin/ruby1.9.3 ruby
	cd

#Node Version Manager
echo "Install Node Version Manager"
if [[ "$(nvm --version)" ]]; then
	echo "Node Version Manager is installed"
fi
	git clone git://github.com/creationix/nvm.git ~/.nvm
	printf "\n\n# NVM\nif [ -s ~/.nvm/nvm.sh ]; then\n\tNVM_DIR=~/.nvm\n\tsource ~/.nvm/nvm.sh\nfi" >> ~/.bashrc
	NVM_DIR=~/.nvm
	source ~/.nvm/nvm.sh

# Install Node.js
echo "Install Node.js"
if [[ "$(node --version)" ]]; then
	echo "Nodejs is installed"
fi
	nvm install v0.12.0
	nvm alias default 0.12
	nvm use 0.12

#Install NPM
echo "Install npm -g npm"
sudo npm install -g npm

# Install bower
echo "Installing Grunt CLI and Bower"
if [[ "$(bower --version)" ]]; then
	echo "Bower is installed"
fi
	sudo npm install bower grunt-cli -g

# Compass
echo "Installing compass"
if [[ "$(compass --version)" ]]; then
	echo "Compass is installed"
fi
	sudo gem install compass

# Yeoman
echo "Install Yeoman"
if [[ "$(yo --version)" ]]; then
	echo "Yeoman is installed"
fi
	sudo npm install -g yo

# Yeoman generator
echo "Install Yeoman generator" 
sudo npm install -g generator-webapp


