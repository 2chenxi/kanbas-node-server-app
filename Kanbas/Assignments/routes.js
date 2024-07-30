import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  const createAssignment = async (req, res) => {
    const { cid } = req.params;
    try {
      const newAssignment = await dao.createAssignment(cid, req.body);
      res.json(newAssignment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const findAssignmentsForCourse = async (req, res) => {
    const { cid } = req.params;
    try {
      const assignments = await dao.findAssignmentsForCourse(cid);
      res.json(assignments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const updateAssignment = async (req, res) => {
    const { aid } = req.params;
    try {
      const status = await dao.updateAssignment(aid, req.body);
      res.json(status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const deleteAssignment = async (req, res) => {
    const { aid } = req.params;
    try {
      const status = await dao.deleteAssignment(aid);
      res.json(status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  app.post("/api/courses/:cid/assignments", createAssignment);
  app.get("/api/courses/:cid/assignments", findAssignmentsForCourse);
  app.put("/api/assignments/:aid", updateAssignment);
  app.delete("/api/assignments/:aid", deleteAssignment);
}
