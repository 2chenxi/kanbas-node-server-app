import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  const createModule = async (req, res) => {
    const { courseId } = req.params;
    try {
      const newModule = await dao.createModule(courseId, req.body);
      res.json(newModule);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const findModulesForCourse = async (req, res) => {
    const { courseId } = req.params;
    try {
      const modules = await dao.findModulesForCourse(courseId);
      res.json(modules);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const findModuleById = async (req, res) => {
    const { moduleId } = req.params;
    try {
      const module = await dao.findModuleById(moduleId);
      res.json(module);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const updateModule = async (req, res) => {
    const { moduleId } = req.params;
    try {
      const status = await dao.updateModule(moduleId, req.body);
      res.json(status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const deleteModule = async (req, res) => {
    const { moduleId } = req.params;
    try {
      const status = await dao.deleteModule(moduleId);
      res.json(status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  app.post("/api/courses/:courseId/modules", createModule);
  app.get("/api/courses/:courseId/modules", findModulesForCourse);
  app.get("/api/modules/:moduleId", findModuleById);
  app.put("/api/modules/:moduleId", updateModule);
  app.delete("/api/modules/:moduleId", deleteModule);
}
