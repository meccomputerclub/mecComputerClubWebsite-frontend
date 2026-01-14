import { jwtVerify, JWTPayload } from "jose";
import { AuthUser } from "./types";

// Define the shape of the data you expect in the token's payload
export interface CustomJWTPayload extends JWTPayload {
  userId: string;
  role: AuthUser["role"];
}

const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

export async function verifyAuthToken(token: string): Promise<CustomJWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secret);

    return payload as CustomJWTPayload;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
}
