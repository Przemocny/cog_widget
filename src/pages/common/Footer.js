import React from "react";

const Footer = () => {
  return (
    <footer class="page-footer text-center font-small mt-4 wow fadeIn">
      <div class="pt-4">
        <a
          class="btn btn-outline-white"
          href="https://mdbootstrap.com/docs/jquery/getting-started/download/"
          target="_blank"
          role="button"
        >
          Download MDB
          <i class="fas fa-download ml-2"></i>
        </a>
        <a
          class="btn btn-outline-white"
          href="https://mdbootstrap.com/education/bootstrap/"
          target="_blank"
          role="button"
        >
          Start free tutorial
          <i class="fas fa-graduation-cap ml-2"></i>
        </a>
      </div>
      <hr class="my-4"></hr>

      <div class="pb-4">
        <a href="https://www.facebook.com/mdbootstrap" target="_blank">
          <i class="fab fa-facebook-f mr-3"></i>
        </a>

        <a href="https://twitter.com/MDBootstrap" target="_blank">
          <i class="fab fa-twitter mr-3"></i>
        </a>

        <a href="https://www.youtube.com/watch?v=7MUISDJ5ZZ4" target="_blank">
          <i class="fab fa-youtube mr-3"></i>
        </a>

        <a
          href="https://plus.google.com/u/0/b/107863090883699620484"
          target="_blank"
        >
          <i class="fab fa-google-plus-g mr-3"></i>
        </a>

        <a href="https://dribbble.com/mdbootstrap" target="_blank">
          <i class="fab fa-dribbble mr-3"></i>
        </a>

        <a href="https://pinterest.com/mdbootstrap" target="_blank">
          <i class="fab fa-pinterest mr-3"></i>
        </a>

        <a
          href="https://github.com/mdbootstrap/bootstrap-material-design"
          target="_blank"
        >
          <i class="fab fa-github mr-3"></i>
        </a>

        <a href="http://codepen.io/mdbootstrap/" target="_blank">
          <i class="fab fa-codepen mr-3"></i>
        </a>
      </div>

      <div class="footer-copyright py-3">
        © 2019 Copyright:
        <a href="https://mdbootstrap.com/education/bootstrap/" target="_blank">
          {" "}
          MDBootstrap.com{" "}
        </a>
      </div>
    </footer>
  );
};

export default Footer;