<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<div align="center">
  <a href="https://github.com/serhatkaya/packaide/">
    <img src="https://user-images.githubusercontent.com/59228830/184737120-1697877d-490b-4714-b10a-7c575b2450ca.png" alt="Logo" height="300" width="300" >
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
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ul>

<!-- ABOUT THE PROJECT -->

## About

I was developing an app with Laravel and deployment was taking too much time then I decided to make a library which is do the extra work for me.

Of course you can use the library with whatever you want.

<p align="right">
    <a href="#readme-top">
     <img src="https://user-images.githubusercontent.com/59228830/184758472-3ac6aa49-c19a-4abe-bb3d-cf5fc4845e33.png" width="32" alt="back to top" height="32"/>
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
    <a href="#readme-top">
     <img src="https://user-images.githubusercontent.com/59228830/184758472-3ac6aa49-c19a-4abe-bb3d-cf5fc4845e33.png" width="32" alt="back to top" height="32"/>
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
    <a href="#readme-top">
     <img src="https://user-images.githubusercontent.com/59228830/184758472-3ac6aa49-c19a-4abe-bb3d-cf5fc4845e33.png" width="32" alt="back to top" height="32"/>
    </a>
</p>

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
    <a href="#readme-top">
     <img src="https://user-images.githubusercontent.com/59228830/184758472-3ac6aa49-c19a-4abe-bb3d-cf5fc4845e33.png" width="32" alt="back to top" height="32"/>
    </a>
</p>

## License

Distributed under the MIT License. See [`LICENSE.md`](https://github.com/serhatkaya/packaide/blob/master/LICENSE.md) for more information.

<p align="right">
    <a href="#readme-top">
     <img src="https://user-images.githubusercontent.com/59228830/184758472-3ac6aa49-c19a-4abe-bb3d-cf5fc4845e33.png" width="32" alt="back to top" height="32"/>
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
