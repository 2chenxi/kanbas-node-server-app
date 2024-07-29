import Module from "./model.js";

export const createModule = (courseNumber, module) => {
  module.course = courseNumber;
  return Module.create(module);
};

export const findModulesForCourse = (courseNumber) => Module.find({ course: courseNumber });


export const updateModule = (moduleId, module) => {
  return Module.updateOne({ _id: moduleId }, { $set: module });
};

export const deleteModule = (moduleId) => {
  return Module.deleteOne({ _id: moduleId });
};
