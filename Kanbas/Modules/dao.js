import Module from "./model.js";

export const createModule = (courseId , module) => {
  module.course = courseId;
  return Module.create(module);
};

export const findModulesForCourse = (courseId ) => Module.find({ course: courseId });


export const updateModule = (moduleId, module) => {
  return Module.updateOne({ _id: moduleId }, { $set: module });
};

export const deleteModule = (moduleId) => {
  return Module.deleteOne({ _id: moduleId });
};
