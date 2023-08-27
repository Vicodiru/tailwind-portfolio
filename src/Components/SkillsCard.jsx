import React from "react";

const SkillsCard = ({ icon, title, text }) => {
  return (
    <article>
      <span>{icon}</span>
      <h4>{title}</h4>
      <p className="mt-2 text-slate-500">{text}</p>
    </article>
  );
};

export default SkillsCard;
