"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/urls:originalUrl", (req, res) => {
    const params = req.params.originalUrl;
    res.json({ status: "ok", message: params });
});
exports.default = router;
