import { Router } from "express";
import { body } from "express-validator";
import { handleInputErrors } from "./modules/middleware";

const router = Router();
router.get("/product", (req, res) => {
  res.json({ message: "Hello" });
});
router.get("/product/:id", () => {});
router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  (req, res) => {}
);
router.post(
  "/product",
  body("name").isString(),
  handleInputErrors,
  (req, res) => {}
);

router.delete("/product/:id", () => {});

router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  oneOf("status", [
    body("IN_PROGRESS"),
    body("SHIPPED"),
    body("DEPRECATED"),
    body("ARCHIVED"),
  ]),
  body("version").optional(),
  () => {}
);
router.post(
  "/update",
  body("title").isString(),
  body("body").isString(),
  body("asset").isString(),
  body("productId").isString(),
  handleInputErrors,
  (req, res) => {}
);
router.delete("/update/:id", () => {});

export default router;
