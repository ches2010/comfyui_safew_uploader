# __init__.py
from .nodes import SafeWConfigNode, SafeWUploadNode

NODE_CLASS_MAPPINGS = {
    "SafeW Config": SafeWConfigNode,
    "SafeW Upload": SafeWUploadNode
}

NODE_DISPLAY_NAME_MAPPINGS = {
    "SafeW Config": "⚙️ SafeW 账户配置",
    "SafeW Upload": "📤 上传到 SafeW"
}

__all__ = ['NODE_CLASS_MAPPINGS', 'NODE_DISPLAY_NAME_MAPPINGS']
