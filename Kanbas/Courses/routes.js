import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  const createCourse = async (req, res) => {
    try {
      const course = await dao.createCourse(req.body);
      res.json(course);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const fetchAllCourses = async (req, res) => {
    try {
      const courses = await dao.fetchAllCourses();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const updateCourse = async (req, res) => {
    const { courseId } = req.params;
    try {
      const status = await dao.updateCourse(courseId, req.body);
      res.json(status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const deleteCourse = async (req, res) => {
    const { courseId } = req.params;
    try {
      const status = await dao.deleteCourse(courseId);
      res.json(status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  app.delete("/api/courses/:courseId", deleteCourse);
  app.post("/api/courses", createCourse);
  app.put("/api/courses/:courseId", updateCourse);
  app.get("/api/courses", fetchAllCourses);
}
