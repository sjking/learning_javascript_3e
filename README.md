# Learning JavaScript 3e

## Chapter 2

### Installing Node

Download LTS from here: https://nodejs.org/en/

Verify download. Assuming version 14.17.5

```
curl -O -L https://nodejs.org/dist/v14.17.5/SHASUMS256.txt.sig
curl -O -L https://nodejs.org/dist/v14.17.5/SHASUMS256.txt
curl -O -L https://nodejs.org/dist/v14.17.5/node-v14.17.5.tar.gz
gpg --keyserver keys.openpgp.org --recv-keys 4ED778F539E3634C779C87C6D7062848A1AB005C
gpg --verify SHASUMS256.txt.sig SHASUMS256.txt
gpg: Signature made Wed 11 Aug 2021 09:31:16 AM PDT
gpg:                using RSA key 4ED778F539E3634C779C87C6D7062848A1AB005C
gpg: Good signature from "Beth Griggs <bgriggs@redhat.com>" [unknown]
gpg:                 aka "Beth Griggs <Bethany.Griggs@uk.ibm.com>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 4ED7 78F5 39E3 634C 779C  87C6 D706 2848 A1AB 005C
grep node-v14.17.5.tar.gz SHASUMS256.txt | sha256sum -c -
node-v14.17.5.tar.gz: OK
```

Install node from source:

```
./configure
make -j2
sudo make install
```

Check install:

```
node --version
v14.17.5
npm --version
6.14.14
```
