import model from "./model.js";

export const createAssignment = (courseId , assignment) => {
    assignment.course = courseId;
  return model.create(assignment);
};

export const findAssignmentsForCourse = (courseId ) => model.find({ course: courseId });


export const updateAssignment = (assignmentId, assignment) => {
  return model.updateOne({ _id: assignmentId }, { $set: assignment });
};

export const deleteAssignment = (assignmentId) => {
  return model.deleteOne({ _id: assignmentId });
};
