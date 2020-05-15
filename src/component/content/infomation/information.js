import React from "react";
import "./style.css";
import avatar from "./hinh-girl.jpg";
function Information(props) {
  return (
    <div className="information">
      <div>
        <img className="avatar" src={avatar} alt="Image Avatar" />
        <p className="my-name">Nguyễn Tuấn Kiệt</p>
        <div className="icon-contact-all">
          <a href="https://www.facebook.com/profile.php?id=100004452575726">
            <svg
              class="icon icon-contact icon-facebook"
              fill="#fff"
              viewBox="0 0 20 20"
            >
              <path d="M17 1h-14c-1.1 0-2 0.9-2 2v14c0 1.101 0.9 2 2 2h7v-7h-2v-2.475h2v-2.050c0-2.164 1.212-3.684 3.766-3.684l1.803 0.002v2.605h-1.197c-0.994 0-1.372 0.746-1.372 1.438v1.69h2.568l-0.568 2.474h-2v7h4c1.1 0 2-0.899 2-2v-14c0-1.1-0.9-2-2-2z"></path>
            </svg>
          </a>
          <a href="https://github.com/tikay1994">
            <svg
              class="icon icon-contact icon-github"
              fill="#fff"
              viewBox="0 0 24 28"
            >
              <path d="M12 2c6.625 0 12 5.375 12 12 0 5.297-3.437 9.797-8.203 11.391-0.609 0.109-0.828-0.266-0.828-0.578 0-0.391 0.016-1.687 0.016-3.297 0-1.125-0.375-1.844-0.812-2.219 2.672-0.297 5.484-1.313 5.484-5.922 0-1.313-0.469-2.375-1.234-3.219 0.125-0.313 0.531-1.531-0.125-3.187-1-0.313-3.297 1.234-3.297 1.234-0.953-0.266-1.984-0.406-3-0.406s-2.047 0.141-3 0.406c0 0-2.297-1.547-3.297-1.234-0.656 1.656-0.25 2.875-0.125 3.187-0.766 0.844-1.234 1.906-1.234 3.219 0 4.594 2.797 5.625 5.469 5.922-0.344 0.313-0.656 0.844-0.766 1.609-0.688 0.313-2.438 0.844-3.484-1-0.656-1.141-1.844-1.234-1.844-1.234-1.172-0.016-0.078 0.734-0.078 0.734 0.781 0.359 1.328 1.75 1.328 1.75 0.703 2.141 4.047 1.422 4.047 1.422 0 1 0.016 1.937 0.016 2.234 0 0.313-0.219 0.688-0.828 0.578-4.766-1.594-8.203-6.094-8.203-11.391 0-6.625 5.375-12 12-12zM4.547 19.234c0.031-0.063-0.016-0.141-0.109-0.187-0.094-0.031-0.172-0.016-0.203 0.031-0.031 0.063 0.016 0.141 0.109 0.187 0.078 0.047 0.172 0.031 0.203-0.031zM5.031 19.766c0.063-0.047 0.047-0.156-0.031-0.25-0.078-0.078-0.187-0.109-0.25-0.047-0.063 0.047-0.047 0.156 0.031 0.25 0.078 0.078 0.187 0.109 0.25 0.047zM5.5 20.469c0.078-0.063 0.078-0.187 0-0.297-0.063-0.109-0.187-0.156-0.266-0.094-0.078 0.047-0.078 0.172 0 0.281s0.203 0.156 0.266 0.109zM6.156 21.125c0.063-0.063 0.031-0.203-0.063-0.297-0.109-0.109-0.25-0.125-0.313-0.047-0.078 0.063-0.047 0.203 0.063 0.297 0.109 0.109 0.25 0.125 0.313 0.047zM7.047 21.516c0.031-0.094-0.063-0.203-0.203-0.25-0.125-0.031-0.266 0.016-0.297 0.109s0.063 0.203 0.203 0.234c0.125 0.047 0.266 0 0.297-0.094zM8.031 21.594c0-0.109-0.125-0.187-0.266-0.172-0.141 0-0.25 0.078-0.25 0.172 0 0.109 0.109 0.187 0.266 0.172 0.141 0 0.25-0.078 0.25-0.172zM8.937 21.438c-0.016-0.094-0.141-0.156-0.281-0.141-0.141 0.031-0.234 0.125-0.219 0.234 0.016 0.094 0.141 0.156 0.281 0.125s0.234-0.125 0.219-0.219z"></path>
            </svg>
          </a>
        </div>
        <div className="info-contact-detail row">
          <div className="mail col-4 contact-content">
            <svg class="icon icon-mail" fill="#fff" viewBox="0 0 20 20">
              <path d="M18 2c1.105 0 2 0.895 2 2v0 12c0 1.105-0.895 2-2 2v0h-16c-1.105 0-2-0.895-2-2v0-12c0-1.1 0.9-2 2-2h16zM13.63 11.1l6.37 4.9v-2l-5.12-3.9 5.12-4.1v-2l-10 8-10-8v2l5.12 4.1-5.12 3.9v2l6.37-4.9 3.63 2.9 3.63-2.9z"></path>
            </svg>
            <p>Kiet211194 @gmail.com</p>
          </div>
          <div className="phone col-4 contact-content">
            <svg class="icon icon-phone" fill="#fff" viewBox="0 0 32 32">
              <path d="M2.126 1.188c1.278-1.281 5.141-1.495 5.17-0.817 0.029 0.677 3.479 8.191 3.509 8.869s-2.274 2.987-2.948 3.663c-0.668 0.669 4.508 6.533 4.606 6.644 0.11 0.099 5.96 5.287 6.628 4.617 0.674-0.676 2.979-2.985 3.653-2.955 0.676 0.029 8.173 3.487 8.849 3.518 0.676 0.029 0.463 3.9-0.815 5.182-1.093 1.095-6.752 5.071-16.592-2.029-1.079-0.622-2.788-2.049-5.38-4.646-0.001-0.001-0.003-0.003-0.005-0.004-0.002-0.003-0.004-0.004-0.006-0.006s-0.004-0.004-0.006-0.006c-0.001-0.002-0.003-0.004-0.004-0.005-2.59-2.598-4.014-4.312-4.635-5.393-7.083-9.864-3.116-15.537-2.024-16.632z"></path>
            </svg>
            <p>+84 355 323 551</p>
          </div>
          <div className="local col-4 contact-content">
            <svg class="icon icon-local" fill="#fff" viewBox="0 0 32 32">
              <path d="M15.938 32c0 0-9.938-14.062-9.938-20.062 0-11.813 9.938-11.938 9.938-11.938s10.062 0.125 10.062 11.875c0 6.187-10.062 20.125-10.062 20.125zM16 6c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z"></path>
            </svg>
            <p>Ho Chi Minh City</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
