MAX_MEMORY = 1024

Vagrant.configure("2") do |config|

    # Vagrant box to build on
    config.vm.box = "ubuntu/trusty64"

    # host to guest port forwarding
    config.vm.network :forwarded_port, guest: 80, host: 8081

    # settings for VirtualBox provider
    config.vm.provider "virtualbox" do |v|
        v.memory = MAX_MEMORY
        v.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/vagrant", "1"]
    end
end
