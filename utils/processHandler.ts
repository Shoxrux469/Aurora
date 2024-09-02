import { AxiosProgressEvent } from "axios";

export function handleProgress(
  progressEvent: AxiosProgressEvent,
  onProgress?: (progress: number) => void
) {
  if (progressEvent.total) {
    const percentCompleted = Math.round(
      (progressEvent.loaded / progressEvent.total) * 100
    );
    if (onProgress) {
      onProgress(percentCompleted);
    }
  }
}
