# __init__.py
from .nodes import SafeWUploadNode

NODE_CLASS_MAPPINGS = {
    "SafeW Upload": SafeWUploadNode
}

NODE_DISPLAY_NAME_MAPPINGS = {
    "SafeW Upload": "📤 Upload Image to SafeW"
}

__all__ = ['NODE_CLASS_MAPPINGS', 'NODE_DISPLAY_NAME_MAPPINGS']
