import { AuthService } from "src/utils/axios/auth";

export function getDevices() {
  return AuthService({
    url: "/devices",
    method: "get",
  });
}

export function createDevice(data) {
  return AuthService({
    url: "/devices",
    method: "post",
    data,
  });
}

export function updateDevice(id, data) {
  return AuthService({
    url: `/devices/${id}`,
    method: "patch",
    data,
  });
}

export function getDeviceById(id) {
  return AuthService({
    url: `/devices/${id}`,
    method: "get",
  });
}

export function deleteDevice(id) {
  return AuthService({
    url: `/devices/${id}`,
    method: "delete",
  });
}
