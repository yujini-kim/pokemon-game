export default function SkillIcon({ src, alt }) {
    return (
      <div className="skillIcon">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    );
  }