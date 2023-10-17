import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, URL }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={() => window.open(URL, "_blank")}>
        <img src={imgUrl} className="proj-img"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}
