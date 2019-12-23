import GLC from "./GLCommander";
import ModelRenderer from "./Render/ModelRenderer/ModelRenderer";
import ModelType from "./Models/ModelType/ModelType";
import ModelInstance from "./Models/ModelInstance/ModelInstance";

export default id => {
  const canvas = document.querySelector("#" + id);

  if (!canvas) {
    return;
  }

  const gl = canvas.getContext("webgl");

  if (!gl) {
    return;
  }

  GLC.init(gl);

  const vertices = [0.0, 0.5, 0.0, -0.5, -0.5, 0.0, 0.5, -0.5, 0.0];
  const indices = [0, 1, 2];

  const modelRenderer = new ModelRenderer();
  modelRenderer.registerNewModel(new ModelType(vertices, indices), "triangle");
  const instance = new ModelInstance(0, 0, 0, 0, 0, 0, 1);
  modelRenderer.addInstance(instance, "triangle");

  const render = () => {
    GLC.clear(1.0, 1.0, 1.0, 1.0);
    instance.updateRotation(1, 1, 1);
    modelRenderer.render();
    window.requestAnimationFrame(render);
  };

  window.requestAnimationFrame(render);
};
