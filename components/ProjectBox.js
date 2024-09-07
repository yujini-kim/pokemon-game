export default function ProjectBox({ src, alt, title, description, link }) {
    return (
      <div className="projectBox group">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
        <div className="changeBg"></div>
        <div className="bgText">
          <span className="initialText">{title}</span>
          <span className="mouseOverText">{description}</span>
          <a href={link} className="linkBox">바로가기</a>
        </div>
      </div>
    );
  }