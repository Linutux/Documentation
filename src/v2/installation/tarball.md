---
title: 'Install froxlor from Tarball'
menu: 'Manual (tarball)'
media_order: 'frx_inst_welcome.png,frx_inst_prereq.png'
---

## 0. Prerequisites

For a manual installation, you need to have a recent webserver (apache2 or nginx) with PHP and MySQL/MariaDB-server running.

You should also have at least one (sub-)domain available to use as froxlor's main system hostname (FQDN). This (sub-)domain _cannot_ be used for customers or hosting websites/e-mails. In case you want to use e.g. **mydomain.tld** yourself for your website and email accounts etc. you can just use a subdomain like **froxlor.mydomain.tld** in the installation process. This way, **mydomain.tld** can be added as a domain for a customer.

## 1. Download and extract the tarball

#### Stable build

! Currently not available, as release is still pending

```shell
# change directory
cd /var/www/html/

# download latest froxlor version
wget https://files.froxlor.org/releases/froxlor-latest.tar.gz

# the content should go in to the folder /var/www/html/froxlor
# note: the archive contains the folder 'froxlor' already!
tar xvfz froxlor-latest.tar.gz

# remove archive
rm froxlor-latest.tar.gz
```

#### Nightly build

!! **Attention**: Nightly builds are current snapshots of the Git repository including dependencies, please only use this if you know what is happening and use it only for testing purposes as new features may not be tested.

## 2. Set Permissions

In order for the webserver to be able to server the files, the owner must be set correctly. Note: If you're using [FCGID](/adminguide/configuration/fcgid)/[PHP-FPM](/adminguide/configuration/php-fpm) for the froxlor-Vhost, you have to replace the webserver-user with your local froxlor-user.

```bash
chown -R [webserver-user]:[webserver-user] /var/www/html/froxlor/
```

(the 'webserver-user' on most systems is 'www-data' or 'apache')

[h2 id="create-froxroot"]3. Create privileged database user[/h2]

Log in to MySQL to create a new privileged user (`froxroot`) which is required for froxlor to add/delete mysql users and databases. You need to specify this user as the **_Privileged database user_** in the web-installer.

````shell
mysql -u root
````

To create the users, we execute the following commands, **please change the default passwords**:

```sql
CREATE USER 'froxroot'@'localhost' IDENTIFIED BY 'CHANGEM3';
GRANT ALL PRIVILEGES ON *.* TO 'froxroot'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
EXIT;
```

## 4. Installation via Web-Installer

! **Note:** On some distributions, the default web-root directory differs from **/var/www/html/**. To access froxlor, you need to adjust the default virtual-host to set **/var/www/html/** as document-root.

Now that you have extracted all the files you are ready to (re)start the webserver. You should now be able to access froxlor via `http://{your-ip-address}/froxlor` Just follow the installation-process and froxlor will be installed in no time.

<ui-browser src="/img/frx_inst_welcome.png" alt="Welcome screen of installation" />

<ui-browser src="/img/frx_inst_prereq.png" alt="Requirement validation" />

The _unprivileged_ MySQL user does not need to exist, it will be created using the provided root-privileged user by the installation process.

## 5. Configuration of services

&#8594; see [Configuration guide](/adminguide/configuration)

## 6. Need help?
If you run into any problems or have difficulties understanding / setting-up / whatever - don't hesitate to contact us either via e-mail ([team@froxlor.org](mailto:team@froxlor.org)) or the preferred way: on Discord ([https://discord.froxlor.org](https://discord.froxlor.org)) and our forums ([https://forum.froxlor.org/](https://forum.froxlor.org/))<script>
import UiBrowser from "../../.vuepress/components/UiBrowser";
export default {
components: { UiBrowser }
}
</script><script>
import UiBrowser from "../../.vuepress/components/UiBrowser";
export default {
components: { UiBrowser }
}
</script><script>
import DemoComponent from "../../.vuepress/components/demo-component";
export default {
components: { DemoComponent }
}
</script><script>
import UiBrowser from "../../.vuepress/components/ui-browser";
export default {
components: { UiBrowser }
}
</script><script>
import UiBrowser from "../../.vuepress/components/ui-browser";
export default {
components: { UiBrowser }
}
</script>