import { AxiosProgressEvent } from "axios";

export function handleProgress(
  progressEvent: AxiosProgressEvent,
  onProgress: (progress: number) => void
) {
  if (progressEvent.lengthComputable) {
    const percentCompleted = Math.round(
      (progressEvent.loaded / progressEvent.total!) * 100
    );
    console.log(onProgress);

    onProgress(percentCompleted);
  } else {
    onProgress(0);
  }
}
