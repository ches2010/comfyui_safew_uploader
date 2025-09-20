// web/js/safew-uploader.js
app.registerExtension({
    name: "Comfy.SafewUploader",
    async beforeRegisterNodeDef(nodeType, nodeData, app) {
        if (nodeData.name === "SafeW Upload") {
            const onNodeCreated = nodeType.prototype.onNodeCreated;
            nodeType.prototype.onNodeCreated = function () {
                const r = onNodeCreated ? onNodeCreated.apply(this, arguments) : undefined;

                // 添加图像预览容器
                const widget = this.widgets.find(w => w.name === "images");
                if (widget) {
                    const preview = document.createElement("div");
                    preview.style.height = "200px";
                    preview.style.overflow = "auto";
                    preview.style.border = "1px dashed #ccc";
                    preview.style.margin = "10px";
                    preview.style.padding = "5px";
                    preview.innerHTML = "<small>Image Preview</small>";

                    this.addDOMWidget("preview", "Preview", preview, {});

                    this.bind("widgetvalue", (name, value) => {
                        if (name === "images" && value && value.length) {
                            preview.innerHTML = "";
                            value.forEach(img => {
                                const imgEl = document.createElement("img");
                                imgEl.src = `/view?filename=${img.filename}&type=${img.type}&subfolder=${img.subfolder}&${Date.now()}`;
                                imgEl.style.maxWidth = "100%";
                                imgEl.style.marginBottom = "5px";
                                preview.appendChild(imgEl);
                            });
                        }
                    });
                }

                return r;
            };
        }
    }
});
