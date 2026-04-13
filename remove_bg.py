import cv2
import numpy as np
import os

path = r"c:\Nest.JS\Noctra_Eventos\public\logo.png"

if os.path.exists(path):
    # Read image with alpha channel if exists, else add one
    img = cv2.imread(path, cv2.IMREAD_UNCHANGED)
    
    if img is not None:
        if img.shape[2] == 3:
            # Add alpha channel
            rgba = cv2.cvtColor(img, cv2.COLOR_BGR2BGRA)
        else:
            rgba = img.copy()

        # We want to keep WHITE (letters) and NEON GREEN (the circle and text).
        # Neon green in BGR is approx [20, 255, 57]. White is [255,255,255].
        # We will drop anything that is dark/grayish (the checkerboard).
        # Checkerboards are usually [150,150,150] or [50,50,50].
        # Let's convert to HSV to mask out greys.
        
        hsv = cv2.cvtColor(img[:, :, :3], cv2.COLOR_BGR2HSV)
        
        # Mask 1: Pure Whites (Low saturation, high value)
        lower_white = np.array([0, 0, 200])
        upper_white = np.array([180, 50, 255])
        mask_white = cv2.inRange(hsv, lower_white, upper_white)
        
        # Mask 2: Greens (Hue ~35-85, decent saturation and value)
        lower_green = np.array([35, 100, 100])
        upper_green = np.array([85, 255, 255])
        mask_green = cv2.inRange(hsv, lower_green, upper_green)
        
        # Combine masks
        mask_combined = cv2.bitwise_or(mask_white, mask_green)
        
        # Smooth the mask to avoid jagged edges
        mask_combined = cv2.GaussianBlur(mask_combined, (3,3), 0)
        
        # Apply mask to alpha channel
        rgba[:, :, 3] = mask_combined
        
        # Save back replacing the original
        cv2.imwrite(path, rgba)
        print("Logo background removed successfully.")
    else:
        print("Failed to read image.")
else:
    print("Logo not found.")
