[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<div align="center">
  <a href="https://github.com/serhatkaya/packaide/">
    <img src="https://user-images.githubusercontent.com/59228830/184989231-3732cefe-9d21-4184-999c-1b9fdb925a86.png" alt="Logo" height="117" width="341" >
  </a>

  <h3 align="center">packaide is a <code><a href="https://www.w3schools.com/whatis/whatis_cli.asp">CLI</a></code> library that package your files defined in config. You can use it to package your source or upload to the host.</h3>

  <p align="center">
    <a href="https://github.com/serhatkaya/packaide/issues">Report Bug</a>
    ·
    <a href="https://github.com/serhatkaya/packaide/issues">Request Feature</a>
  </p>
</div>

<p align="center">
<a href="https://www.buymeacoffee.com/serhatkaya" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png"/>
  </a>
</p>

<!-- TABLE OF CONTENTS -->
  <h2>Table of Contents</h2>
  <ul>
    <li>
      <a href="#about">About</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#commands">Usage & Commands</a></li>
    <li><a href="#configuration">Configuration</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ul>

<!-- ABOUT THE PROJECT -->

## About

I was developing an app with Laravel and deployment was taking too much time then I decided to make a library which is do the extra work for me.

Of course you can use the library with whatever you want.

<p align="right">
<a href="#top">
<img src="https://user-images.githubusercontent.com/59228830/184758472-3ac6aa49-c19a-4abe-bb3d-cf5fc4845e33.png" width="32" alt="back to top" height="32" />
</a>
</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

You must install one of these package managers [npm](https://github.com/npm) or [yarn](https://github.com/yarnpkg).

### Installation

### npm

```sh
npm install packaide -D
```

### yarn

```sh
yarn add packaide -D
```

_Make sure you installing the package as devDependency._

_Also you can install the `CLI` as global to use it everywhere, but it's not designed to use it that way. It could be challenging._

<p align="right">
<a href="#top">
<img src="https://user-images.githubusercontent.com/59228830/184758472-3ac6aa49-c19a-4abe-bb3d-cf5fc4845e33.png" width="32" alt="back to top" height="32" />
</a>
</p>

## Commands

### Parent command

`packaide`

<table class="tg">
  <thead>
    <tr >
      <th class="tg-0pky" colspan="2">Command</th>
      <th class="tg-0pky">Description</th>
      <th class="tg-0pky">Options</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="tg-0pky"  colspan="2"><code>config</code></td>
      <td class="tg-0pky">Shows config help.</td>
      <td class="tg-0pky"></td>
    </tr>
    <tr>
      <td class="tg-0pky" colspan="2"><code>config -s &lt;key&gt; &lt;value&gt;</code></td>
      <td class="tg-0pky">Set config property with given value. (seperate values with "," for arrays.)
      <br/>
       <code>packaide -s files .env,tsconfig.json,package.json</code>
      </td>
      <td class="tg-0pky"><ul>
      <li>outputPath</li>
      <li>folders</li>
      <li>archiveAfterCopy</li>
      <li>archiveName</li>
      <li>files</li>
      <li>ftp.server</li>
      <li>ftp.username</li>
      <li>ftp.password</li>
      <li>ftp.sftp</li>
      <li>ftp.port</li>
      <li>ftp.deleteRemote</li>
      <li>ftp.include</li>
      <li>ftp.exclude</li>
      <li>ftp.exclude</li>
      <li>ftp.forcePassiveMode</li>
      <li>ftp.remoteRoot</li>
      </ul></td>
    </tr>
    <tr>
      <td class="tg-0pky"  colspan="2"><code>config -dc</code></td>
      <td class="tg-0pky">Creates default .packaide.json in your project root folder. Prompts yes/no if already exists to override current config.</td>
      <td class="tg-0pky"></td>
    </tr>
    <tr>
      <td class="tg-0pky"  colspan="2"><code>copy</code></td>
      <td class="tg-0pky">Start packaging.</td>
      <td class="tg-0pky"></td>
    </tr>
    <tr>
      <td class="tg-0pky"  colspan="2"><code>upload</code></td>
      <td class="tg-0pky">Start uploading to target server.</td>
      <td class="tg-0pky"></td>
    </tr>
  </tbody>
</table>

<p align="right">
<a href="#top">
<img src="https://user-images.githubusercontent.com/59228830/184758472-3ac6aa49-c19a-4abe-bb3d-cf5fc4845e33.png" width="32" alt="back to top" height="32" />
</a>
</p>

## Configuration

<table class="tg">
  <thead>
    <tr >
      <th class="tg-0pky" >Key</th>
      <th class="tg-0pky">Type</th>
      <th class="tg-0pky">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="tg-0pky"  ><code>outputPath</code></td>
      <td class="tg-0pky"><code>string</code></td>
      <td class="tg-0pky">Destination folder for files to copy.</td>
    </tr>
    <tr>
      <td class="tg-0pky"  ><code>folders</code></td>
      <td class="tg-0pky"><code>array</code></td>
      <td class="tg-0pky">Folders to copy.</td>
    </tr>
    <tr>
      <td class="tg-0pky"  ><code>files</code></td>
      <td class="tg-0pky"><code>array</code></td>
      <td class="tg-0pky">Filesto copy.</td>
    </tr>
    <tr>
      <td class="tg-0pky"  ><code>archiveAftercopy</code></td>
      <td class="tg-0pky"><code>boolean</code></td>
      <td class="tg-0pky">If setted as true an archive file will be created in your project root after copy process.</td>
    </tr>
    <tr>
      <td class="tg-0pky"  ><code>archiveName</code></td>
      <td class="tg-0pky"><code>string</code></td>
      <td class="tg-0pky">Archive file name.</td>
    </tr>
    <tr>
      <td colspan=3> <h3 align="center">FTP Settings</h3></td>
    </tr>
    <tr>
      <td><code>ftp</code></td>
      <td><code>object</code></td>
      <td>Ftp config.</td>
    </tr>
    <tr>
      <td><code>ftp.server</code></td>
      <td><code>string</code></td>
      <td>FTP Server IP address.</td>
    </tr>
    <tr>
      <td><code>ftp.username</code></td>
      <td><code>string</code></td>
      <td>FTP Username.</td>
    </tr>
    <tr>
      <td><code>ftp.password</code></td>
      <td><code>string</code></td>
      <td>FTP Password.</td>
    </tr>
    <tr>
      <td><code>ftp.port</code></td>
      <td><code>number</code></td>
      <td>FTP Password.</td>
    </tr>
    <tr>
      <td><code>ftp.sftp</code></td>
      <td><code>boolean</code></td>
      <td>SFTP mode on/off.</td>
    </tr>
    <tr>
      <td><code>ftp.deleteRemote</code></td>
      <td><code>boolean</code></td>
      <td>If setted as true packaide will delete remote files on the server.</td>
    </tr>
    <tr>
      <td><code>ftp.include</code></td>
      <td><code>array</code></td>
      <td>Included file names or patterns for the files to upload.</td>
    </tr>
    <tr>
      <td><code>ftp.excluded</code></td>
      <td><code>array</code></td>
      <td>Excluded file names or patterns for the files to upload.</td>
    </tr>
    <tr>
      <td><code>ftp.forcePassiveMode</code></td>
      <td><code>boolean</code></td>
      <td>Passive mode.</td>
    </tr>
    <tr>
      <td><code>ftp.remoteRoot</code></td>
      <td><code>string</code></td>
      <td>Remote FTP server upload path.</td>
    </tr>
  </tbody>
</table>

## Usage Example

### Example config file `.packaide.json`

```json
{
  "outputPath": "release",
  "folders": [
    "./app",
    "./bootstrap",
    "./config",
    "./public",
    "./resources/views",
    "./resources/lang",
    "./routes",
    "./storage"
  ],
  "archiveAfterCopy": true,
  "archiveName": "packaide-release",
  "files": [".env", "composer.json", "composer.lock", ".production.env", "artisan"],
  "ftp": {
    "server": "127.0.0.7",
    "username": "ftpacc",
    "password": "S3CR3TP455W04RD",
    "sftp": false,
    "port": 21,
    "deleteRemote": false,
    "include": ["*", "**/*", ".env", ".production.env"],
    "exclude": [".local.env"],
    "forcePassiveMode": true,
    "remoteRoot": "/home/yourwebsite.com/public_html/"
  }
}
```

run `packaide copy`

![alt](https://user-images.githubusercontent.com/59228830/184989640-d24cb686-4b44-468b-aa89-1d6294222076.png)

Have fun :)

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">
<a href="#top">
<img src="https://user-images.githubusercontent.com/59228830/184758472-3ac6aa49-c19a-4abe-bb3d-cf5fc4845e33.png" width="32" alt="back to top" height="32" />
</a>
</p>

## License

Distributed under the MIT License. See [`LICENSE.md`](https://github.com/serhatkaya/packaide/blob/master/LICENSE.md) for more information.

<p align="right">
<a href="#top">
<img src="https://user-images.githubusercontent.com/59228830/184758472-3ac6aa49-c19a-4abe-bb3d-cf5fc4845e33.png" width="32" alt="back to top" height="32" />
</a>
</p>

[contributors-shield]: https://img.shields.io/github/contributors/serhatkaya/packaide.svg?style=for-the-badge
[contributors-url]: https://github.com/serhatkaya/packaide/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/serhatkaya/packaide.svg?style=for-the-badge
[forks-url]: https://github.com/serhatkaya/packaide/network/members
[stars-shield]: https://img.shields.io/github/stars/serhatkaya/packaide.svg?style=for-the-badge
[stars-url]: https://github.com/serhatkaya/packaide/stargazers
[issues-shield]: https://img.shields.io/github/issues/serhatkaya/packaide.svg?style=for-the-badge
[issues-url]: https://github.com/serhatkaya/packaide/issues
[license-shield]: https://img.shields.io/github/license/serhatkaya/packaide.svg?style=for-the-badge
[license-url]: https://github.com/serhatkaya/packaide/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/kaya-serhat
