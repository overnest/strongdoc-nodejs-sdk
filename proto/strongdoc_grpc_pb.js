// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var strongdoc_pb = require('./strongdoc_pb.js');
var document_pb = require('./document_pb.js');
var documentNoStore_pb = require('./documentNoStore_pb.js');
var search_pb = require('./search_pb.js');
var accounts_pb = require('./accounts_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_proto_AddSharableOrgRequest(arg) {
  if (!(arg instanceof accounts_pb.AddSharableOrgRequest)) {
    throw new Error('Expected argument of type proto.AddSharableOrgRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_AddSharableOrgRequest(buffer_arg) {
  return accounts_pb.AddSharableOrgRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_AddSharableOrgResponse(arg) {
  if (!(arg instanceof accounts_pb.AddSharableOrgResponse)) {
    throw new Error('Expected argument of type proto.AddSharableOrgResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_AddSharableOrgResponse(buffer_arg) {
  return accounts_pb.AddSharableOrgResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_DecryptDocReq(arg) {
  if (!(arg instanceof documentNoStore_pb.DecryptDocReq)) {
    throw new Error('Expected argument of type proto.DecryptDocReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_DecryptDocReq(buffer_arg) {
  return documentNoStore_pb.DecryptDocReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_DecryptDocResp(arg) {
  if (!(arg instanceof documentNoStore_pb.DecryptDocResp)) {
    throw new Error('Expected argument of type proto.DecryptDocResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_DecryptDocResp(buffer_arg) {
  return documentNoStore_pb.DecryptDocResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_DecryptDocStreamReq(arg) {
  if (!(arg instanceof documentNoStore_pb.DecryptDocStreamReq)) {
    throw new Error('Expected argument of type proto.DecryptDocStreamReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_DecryptDocStreamReq(buffer_arg) {
  return documentNoStore_pb.DecryptDocStreamReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_DecryptDocStreamResp(arg) {
  if (!(arg instanceof documentNoStore_pb.DecryptDocStreamResp)) {
    throw new Error('Expected argument of type proto.DecryptDocStreamResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_DecryptDocStreamResp(buffer_arg) {
  return documentNoStore_pb.DecryptDocStreamResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_DemoteUserRequest(arg) {
  if (!(arg instanceof accounts_pb.DemoteUserRequest)) {
    throw new Error('Expected argument of type proto.DemoteUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_DemoteUserRequest(buffer_arg) {
  return accounts_pb.DemoteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_DemoteUserResponse(arg) {
  if (!(arg instanceof accounts_pb.DemoteUserResponse)) {
    throw new Error('Expected argument of type proto.DemoteUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_DemoteUserResponse(buffer_arg) {
  return accounts_pb.DemoteUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_DownloadDocReq(arg) {
  if (!(arg instanceof document_pb.DownloadDocReq)) {
    throw new Error('Expected argument of type proto.DownloadDocReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_DownloadDocReq(buffer_arg) {
  return document_pb.DownloadDocReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_DownloadDocResp(arg) {
  if (!(arg instanceof document_pb.DownloadDocResp)) {
    throw new Error('Expected argument of type proto.DownloadDocResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_DownloadDocResp(buffer_arg) {
  return document_pb.DownloadDocResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_DownloadDocStreamReq(arg) {
  if (!(arg instanceof document_pb.DownloadDocStreamReq)) {
    throw new Error('Expected argument of type proto.DownloadDocStreamReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_DownloadDocStreamReq(buffer_arg) {
  return document_pb.DownloadDocStreamReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_DownloadDocStreamResp(arg) {
  if (!(arg instanceof document_pb.DownloadDocStreamResp)) {
    throw new Error('Expected argument of type proto.DownloadDocStreamResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_DownloadDocStreamResp(buffer_arg) {
  return document_pb.DownloadDocStreamResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_EncryptDocReq(arg) {
  if (!(arg instanceof documentNoStore_pb.EncryptDocReq)) {
    throw new Error('Expected argument of type proto.EncryptDocReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_EncryptDocReq(buffer_arg) {
  return documentNoStore_pb.EncryptDocReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_EncryptDocResp(arg) {
  if (!(arg instanceof documentNoStore_pb.EncryptDocResp)) {
    throw new Error('Expected argument of type proto.EncryptDocResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_EncryptDocResp(buffer_arg) {
  return documentNoStore_pb.EncryptDocResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_EncryptDocStreamReq(arg) {
  if (!(arg instanceof documentNoStore_pb.EncryptDocStreamReq)) {
    throw new Error('Expected argument of type proto.EncryptDocStreamReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_EncryptDocStreamReq(buffer_arg) {
  return documentNoStore_pb.EncryptDocStreamReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_EncryptDocStreamResp(arg) {
  if (!(arg instanceof documentNoStore_pb.EncryptDocStreamResp)) {
    throw new Error('Expected argument of type proto.EncryptDocStreamResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_EncryptDocStreamResp(buffer_arg) {
  return documentNoStore_pb.EncryptDocStreamResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetBillingDetailsRequest(arg) {
  if (!(arg instanceof strongdoc_pb.GetBillingDetailsRequest)) {
    throw new Error('Expected argument of type proto.GetBillingDetailsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetBillingDetailsRequest(buffer_arg) {
  return strongdoc_pb.GetBillingDetailsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetBillingDetailsResponse(arg) {
  if (!(arg instanceof strongdoc_pb.GetBillingDetailsResponse)) {
    throw new Error('Expected argument of type proto.GetBillingDetailsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetBillingDetailsResponse(buffer_arg) {
  return strongdoc_pb.GetBillingDetailsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetBillingPeriodRequest(arg) {
  if (!(arg instanceof strongdoc_pb.GetBillingPeriodRequest)) {
    throw new Error('Expected argument of type proto.GetBillingPeriodRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetBillingPeriodRequest(buffer_arg) {
  return strongdoc_pb.GetBillingPeriodRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetBillingPeriodResponse(arg) {
  if (!(arg instanceof strongdoc_pb.GetBillingPeriodResponse)) {
    throw new Error('Expected argument of type proto.GetBillingPeriodResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetBillingPeriodResponse(buffer_arg) {
  return strongdoc_pb.GetBillingPeriodResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetConfigurationReq(arg) {
  if (!(arg instanceof strongdoc_pb.GetConfigurationReq)) {
    throw new Error('Expected argument of type proto.GetConfigurationReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetConfigurationReq(buffer_arg) {
  return strongdoc_pb.GetConfigurationReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetConfigurationResp(arg) {
  if (!(arg instanceof strongdoc_pb.GetConfigurationResp)) {
    throw new Error('Expected argument of type proto.GetConfigurationResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetConfigurationResp(buffer_arg) {
  return strongdoc_pb.GetConfigurationResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetDocumentsSizeRequest(arg) {
  if (!(arg instanceof document_pb.GetDocumentsSizeRequest)) {
    throw new Error('Expected argument of type proto.GetDocumentsSizeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetDocumentsSizeRequest(buffer_arg) {
  return document_pb.GetDocumentsSizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetDocumentsSizeResponse(arg) {
  if (!(arg instanceof document_pb.GetDocumentsSizeResponse)) {
    throw new Error('Expected argument of type proto.GetDocumentsSizeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetDocumentsSizeResponse(buffer_arg) {
  return document_pb.GetDocumentsSizeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetIndexSizeRequest(arg) {
  if (!(arg instanceof search_pb.GetIndexSizeRequest)) {
    throw new Error('Expected argument of type proto.GetIndexSizeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetIndexSizeRequest(buffer_arg) {
  return search_pb.GetIndexSizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetIndexSizeResponse(arg) {
  if (!(arg instanceof search_pb.GetIndexSizeResponse)) {
    throw new Error('Expected argument of type proto.GetIndexSizeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetIndexSizeResponse(buffer_arg) {
  return search_pb.GetIndexSizeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ListDocumentsRequest(arg) {
  if (!(arg instanceof document_pb.ListDocumentsRequest)) {
    throw new Error('Expected argument of type proto.ListDocumentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ListDocumentsRequest(buffer_arg) {
  return document_pb.ListDocumentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ListDocumentsResponse(arg) {
  if (!(arg instanceof document_pb.ListDocumentsResponse)) {
    throw new Error('Expected argument of type proto.ListDocumentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ListDocumentsResponse(buffer_arg) {
  return document_pb.ListDocumentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ListUsersRequest(arg) {
  if (!(arg instanceof accounts_pb.ListUsersRequest)) {
    throw new Error('Expected argument of type proto.ListUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ListUsersRequest(buffer_arg) {
  return accounts_pb.ListUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ListUsersResponse(arg) {
  if (!(arg instanceof accounts_pb.ListUsersResponse)) {
    throw new Error('Expected argument of type proto.ListUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ListUsersResponse(buffer_arg) {
  return accounts_pb.ListUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_LoginRequest(arg) {
  if (!(arg instanceof accounts_pb.LoginRequest)) {
    throw new Error('Expected argument of type proto.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_LoginRequest(buffer_arg) {
  return accounts_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_LoginResponse(arg) {
  if (!(arg instanceof accounts_pb.LoginResponse)) {
    throw new Error('Expected argument of type proto.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_LoginResponse(buffer_arg) {
  return accounts_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_LogoutRequest(arg) {
  if (!(arg instanceof accounts_pb.LogoutRequest)) {
    throw new Error('Expected argument of type proto.LogoutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_LogoutRequest(buffer_arg) {
  return accounts_pb.LogoutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_LogoutResponse(arg) {
  if (!(arg instanceof accounts_pb.LogoutResponse)) {
    throw new Error('Expected argument of type proto.LogoutResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_LogoutResponse(buffer_arg) {
  return accounts_pb.LogoutResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_PromoteUserRequest(arg) {
  if (!(arg instanceof accounts_pb.PromoteUserRequest)) {
    throw new Error('Expected argument of type proto.PromoteUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_PromoteUserRequest(buffer_arg) {
  return accounts_pb.PromoteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_PromoteUserResponse(arg) {
  if (!(arg instanceof accounts_pb.PromoteUserResponse)) {
    throw new Error('Expected argument of type proto.PromoteUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_PromoteUserResponse(buffer_arg) {
  return accounts_pb.PromoteUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RegisterOrganizationRequest(arg) {
  if (!(arg instanceof accounts_pb.RegisterOrganizationRequest)) {
    throw new Error('Expected argument of type proto.RegisterOrganizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RegisterOrganizationRequest(buffer_arg) {
  return accounts_pb.RegisterOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RegisterOrganizationResponse(arg) {
  if (!(arg instanceof accounts_pb.RegisterOrganizationResponse)) {
    throw new Error('Expected argument of type proto.RegisterOrganizationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RegisterOrganizationResponse(buffer_arg) {
  return accounts_pb.RegisterOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RegisterUserRequest(arg) {
  if (!(arg instanceof accounts_pb.RegisterUserRequest)) {
    throw new Error('Expected argument of type proto.RegisterUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RegisterUserRequest(buffer_arg) {
  return accounts_pb.RegisterUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RegisterUserResponse(arg) {
  if (!(arg instanceof accounts_pb.RegisterUserResponse)) {
    throw new Error('Expected argument of type proto.RegisterUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RegisterUserResponse(buffer_arg) {
  return accounts_pb.RegisterUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RemoveDocumentRequest(arg) {
  if (!(arg instanceof document_pb.RemoveDocumentRequest)) {
    throw new Error('Expected argument of type proto.RemoveDocumentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RemoveDocumentRequest(buffer_arg) {
  return document_pb.RemoveDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RemoveDocumentResponse(arg) {
  if (!(arg instanceof document_pb.RemoveDocumentResponse)) {
    throw new Error('Expected argument of type proto.RemoveDocumentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RemoveDocumentResponse(buffer_arg) {
  return document_pb.RemoveDocumentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RemoveOrganizationRequest(arg) {
  if (!(arg instanceof accounts_pb.RemoveOrganizationRequest)) {
    throw new Error('Expected argument of type proto.RemoveOrganizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RemoveOrganizationRequest(buffer_arg) {
  return accounts_pb.RemoveOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RemoveOrganizationResponse(arg) {
  if (!(arg instanceof accounts_pb.RemoveOrganizationResponse)) {
    throw new Error('Expected argument of type proto.RemoveOrganizationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RemoveOrganizationResponse(buffer_arg) {
  return accounts_pb.RemoveOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RemoveSharableOrgRequest(arg) {
  if (!(arg instanceof accounts_pb.RemoveSharableOrgRequest)) {
    throw new Error('Expected argument of type proto.RemoveSharableOrgRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RemoveSharableOrgRequest(buffer_arg) {
  return accounts_pb.RemoveSharableOrgRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RemoveSharableOrgResponse(arg) {
  if (!(arg instanceof accounts_pb.RemoveSharableOrgResponse)) {
    throw new Error('Expected argument of type proto.RemoveSharableOrgResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RemoveSharableOrgResponse(buffer_arg) {
  return accounts_pb.RemoveSharableOrgResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RemoveUserRequest(arg) {
  if (!(arg instanceof accounts_pb.RemoveUserRequest)) {
    throw new Error('Expected argument of type proto.RemoveUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RemoveUserRequest(buffer_arg) {
  return accounts_pb.RemoveUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RemoveUserResponse(arg) {
  if (!(arg instanceof accounts_pb.RemoveUserResponse)) {
    throw new Error('Expected argument of type proto.RemoveUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RemoveUserResponse(buffer_arg) {
  return accounts_pb.RemoveUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SearchRequest(arg) {
  if (!(arg instanceof search_pb.SearchRequest)) {
    throw new Error('Expected argument of type proto.SearchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SearchRequest(buffer_arg) {
  return search_pb.SearchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SearchResponse(arg) {
  if (!(arg instanceof search_pb.SearchResponse)) {
    throw new Error('Expected argument of type proto.SearchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SearchResponse(buffer_arg) {
  return search_pb.SearchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SetBillingPeriodRequest(arg) {
  if (!(arg instanceof strongdoc_pb.SetBillingPeriodRequest)) {
    throw new Error('Expected argument of type proto.SetBillingPeriodRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SetBillingPeriodRequest(buffer_arg) {
  return strongdoc_pb.SetBillingPeriodRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SetBillingPeriodResponse(arg) {
  if (!(arg instanceof strongdoc_pb.SetBillingPeriodResponse)) {
    throw new Error('Expected argument of type proto.SetBillingPeriodResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SetBillingPeriodResponse(buffer_arg) {
  return strongdoc_pb.SetBillingPeriodResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SetMultiLevelSharingRequest(arg) {
  if (!(arg instanceof accounts_pb.SetMultiLevelSharingRequest)) {
    throw new Error('Expected argument of type proto.SetMultiLevelSharingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SetMultiLevelSharingRequest(buffer_arg) {
  return accounts_pb.SetMultiLevelSharingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SetMultiLevelSharingResponse(arg) {
  if (!(arg instanceof accounts_pb.SetMultiLevelSharingResponse)) {
    throw new Error('Expected argument of type proto.SetMultiLevelSharingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SetMultiLevelSharingResponse(buffer_arg) {
  return accounts_pb.SetMultiLevelSharingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ShareDocumentRequest(arg) {
  if (!(arg instanceof document_pb.ShareDocumentRequest)) {
    throw new Error('Expected argument of type proto.ShareDocumentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ShareDocumentRequest(buffer_arg) {
  return document_pb.ShareDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ShareDocumentResponse(arg) {
  if (!(arg instanceof document_pb.ShareDocumentResponse)) {
    throw new Error('Expected argument of type proto.ShareDocumentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ShareDocumentResponse(buffer_arg) {
  return document_pb.ShareDocumentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_UnshareDocumentRequest(arg) {
  if (!(arg instanceof document_pb.UnshareDocumentRequest)) {
    throw new Error('Expected argument of type proto.UnshareDocumentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_UnshareDocumentRequest(buffer_arg) {
  return document_pb.UnshareDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_UnshareDocumentResponse(arg) {
  if (!(arg instanceof document_pb.UnshareDocumentResponse)) {
    throw new Error('Expected argument of type proto.UnshareDocumentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_UnshareDocumentResponse(buffer_arg) {
  return document_pb.UnshareDocumentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_UploadDocReq(arg) {
  if (!(arg instanceof document_pb.UploadDocReq)) {
    throw new Error('Expected argument of type proto.UploadDocReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_UploadDocReq(buffer_arg) {
  return document_pb.UploadDocReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_UploadDocResp(arg) {
  if (!(arg instanceof document_pb.UploadDocResp)) {
    throw new Error('Expected argument of type proto.UploadDocResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_UploadDocResp(buffer_arg) {
  return document_pb.UploadDocResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_UploadDocStreamReq(arg) {
  if (!(arg instanceof document_pb.UploadDocStreamReq)) {
    throw new Error('Expected argument of type proto.UploadDocStreamReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_UploadDocStreamReq(buffer_arg) {
  return document_pb.UploadDocStreamReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_UploadDocStreamResp(arg) {
  if (!(arg instanceof document_pb.UploadDocStreamResp)) {
    throw new Error('Expected argument of type proto.UploadDocStreamResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_UploadDocStreamResp(buffer_arg) {
  return document_pb.UploadDocStreamResp.deserializeBinary(new Uint8Array(buffer_arg));
}


var StrongDocServiceService = exports.StrongDocServiceService = {
  // Registers a new organization
//
// The user who created the organization is automatically an administrator
// 
// Does not require Login
registerOrganization: {
    path: '/proto.StrongDocService/RegisterOrganization',
    requestStream: false,
    responseStream: false,
    requestType: accounts_pb.RegisterOrganizationRequest,
    responseType: accounts_pb.RegisterOrganizationResponse,
    requestSerialize: serialize_proto_RegisterOrganizationRequest,
    requestDeserialize: deserialize_proto_RegisterOrganizationRequest,
    responseSerialize: serialize_proto_RegisterOrganizationResponse,
    responseDeserialize: deserialize_proto_RegisterOrganizationResponse,
  },
  // Remove an organization and its search indexes
//
// Requires Administrator privilege. Only an administrator can remove the whole organization
//
// Requires Login
removeOrganization: {
    path: '/proto.StrongDocService/RemoveOrganization',
    requestStream: false,
    responseStream: false,
    requestType: accounts_pb.RemoveOrganizationRequest,
    responseType: accounts_pb.RemoveOrganizationResponse,
    requestSerialize: serialize_proto_RemoveOrganizationRequest,
    requestDeserialize: deserialize_proto_RemoveOrganizationRequest,
    responseSerialize: serialize_proto_RemoveOrganizationResponse,
    responseDeserialize: deserialize_proto_RemoveOrganizationResponse,
  },
  // Register new user
// 
// Creates new user if it doesn't already exist. If the user already exist, and
// error is thrown
//
// Requires administrator privilege
registerUser: {
    path: '/proto.StrongDocService/RegisterUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_pb.RegisterUserRequest,
    responseType: accounts_pb.RegisterUserResponse,
    requestSerialize: serialize_proto_RegisterUserRequest,
    requestDeserialize: deserialize_proto_RegisterUserRequest,
    responseSerialize: serialize_proto_RegisterUserResponse,
    responseDeserialize: deserialize_proto_RegisterUserResponse,
  },
  // rpc GetUserInfo(GetUserInfoRequest) returns (GetUserInfoResponse) {
//   option (google.api.http) = {
//     post: "/v1/account/getuserinfo"
//     body: "*"
//   };
//   option (grpc.gateway.protoc_gen_swagger.options.openapiv2_operation) = {
//     security: {
//       security_requirement: {
//         key: "ApiKeyAuth";
//         value: {};
//       }
//     };
//   };
// }
//
// List the users of the organization
//
// Requires Login
listUsers: {
    path: '/proto.StrongDocService/ListUsers',
    requestStream: false,
    responseStream: false,
    requestType: accounts_pb.ListUsersRequest,
    responseType: accounts_pb.ListUsersResponse,
    requestSerialize: serialize_proto_ListUsersRequest,
    requestDeserialize: deserialize_proto_ListUsersRequest,
    responseSerialize: serialize_proto_ListUsersResponse,
    responseDeserialize: deserialize_proto_ListUsersResponse,
  },
  // Remove user from organization
//
// Removes the user from the organization. The users documents still exists, 
// but belong to the organization, only accessible by organization admin.
//
// Requires administrator privilege.
removeUser: {
    path: '/proto.StrongDocService/RemoveUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_pb.RemoveUserRequest,
    responseType: accounts_pb.RemoveUserResponse,
    requestSerialize: serialize_proto_RemoveUserRequest,
    requestDeserialize: deserialize_proto_RemoveUserRequest,
    responseSerialize: serialize_proto_RemoveUserResponse,
    responseDeserialize: deserialize_proto_RemoveUserResponse,
  },
  // Promote a regular user to administrator at the organization
//
// Requires administrator privilege.
promoteUser: {
    path: '/proto.StrongDocService/PromoteUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_pb.PromoteUserRequest,
    responseType: accounts_pb.PromoteUserResponse,
    requestSerialize: serialize_proto_PromoteUserRequest,
    requestDeserialize: deserialize_proto_PromoteUserRequest,
    responseSerialize: serialize_proto_PromoteUserResponse,
    responseDeserialize: deserialize_proto_PromoteUserResponse,
  },
  // Demote administrator to regular user at the organization. Attempting to
// demote the last administrator of an organization will fail
//
// Requires administrator privilege.
demoteUser: {
    path: '/proto.StrongDocService/DemoteUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_pb.DemoteUserRequest,
    responseType: accounts_pb.DemoteUserResponse,
    requestSerialize: serialize_proto_DemoteUserRequest,
    requestDeserialize: deserialize_proto_DemoteUserRequest,
    responseSerialize: serialize_proto_DemoteUserResponse,
    responseDeserialize: deserialize_proto_DemoteUserResponse,
  },
  // List the documents the user can access
//
// Administrators can see all documents belonging to the organization
//
// Requires Login
listDocuments: {
    path: '/proto.StrongDocService/ListDocuments',
    requestStream: false,
    responseStream: false,
    requestType: document_pb.ListDocumentsRequest,
    responseType: document_pb.ListDocumentsResponse,
    requestSerialize: serialize_proto_ListDocumentsRequest,
    requestDeserialize: deserialize_proto_ListDocumentsRequest,
    responseSerialize: serialize_proto_ListDocumentsResponse,
    responseDeserialize: deserialize_proto_ListDocumentsResponse,
  },
  // Remove document the user can access
//
// Admin user can remove document for the whole organization
// Regular user only can remove document for him/herself
//
// Requires Login
removeDocument: {
    path: '/proto.StrongDocService/RemoveDocument',
    requestStream: false,
    responseStream: false,
    requestType: document_pb.RemoveDocumentRequest,
    responseType: document_pb.RemoveDocumentResponse,
    requestSerialize: serialize_proto_RemoveDocumentRequest,
    requestDeserialize: deserialize_proto_RemoveDocumentRequest,
    responseSerialize: serialize_proto_RemoveDocumentResponse,
    responseDeserialize: deserialize_proto_RemoveDocumentResponse,
  },
  // Upload document
//
// User can upload document to the organization for storage
// 
// Requires Login 
uploadDocumentStream: {
    path: '/proto.StrongDocService/UploadDocumentStream',
    requestStream: true,
    responseStream: false,
    requestType: document_pb.UploadDocStreamReq,
    responseType: document_pb.UploadDocStreamResp,
    requestSerialize: serialize_proto_UploadDocStreamReq,
    requestDeserialize: deserialize_proto_UploadDocStreamReq,
    responseSerialize: serialize_proto_UploadDocStreamResp,
    responseDeserialize: deserialize_proto_UploadDocStreamResp,
  },
  // This is not available through gRPC REST gateway, 
// since REST api does not support streaming protocol
// Upload document
//
// User can upload document to the organization for storage
// 
// Requires Login 
uploadDocument: {
    path: '/proto.StrongDocService/UploadDocument',
    requestStream: false,
    responseStream: false,
    requestType: document_pb.UploadDocReq,
    responseType: document_pb.UploadDocResp,
    requestSerialize: serialize_proto_UploadDocReq,
    requestDeserialize: deserialize_proto_UploadDocReq,
    responseSerialize: serialize_proto_UploadDocResp,
    responseDeserialize: deserialize_proto_UploadDocResp,
  },
  // Download document stream
//
// User can download the documents
// 
// Requires Login 
downloadDocumentStream: {
    path: '/proto.StrongDocService/DownloadDocumentStream',
    requestStream: false,
    responseStream: true,
    requestType: document_pb.DownloadDocStreamReq,
    responseType: document_pb.DownloadDocStreamResp,
    requestSerialize: serialize_proto_DownloadDocStreamReq,
    requestDeserialize: deserialize_proto_DownloadDocStreamReq,
    responseSerialize: serialize_proto_DownloadDocStreamResp,
    responseDeserialize: deserialize_proto_DownloadDocStreamResp,
  },
  // This is not available through gRPC REST gateway, 
// since REST api does not support streaming protocol
// Download document
//
// User can download the documents
// 
// Requires Login 
downloadDocument: {
    path: '/proto.StrongDocService/DownloadDocument',
    requestStream: false,
    responseStream: false,
    requestType: document_pb.DownloadDocReq,
    responseType: document_pb.DownloadDocResp,
    requestSerialize: serialize_proto_DownloadDocReq,
    requestDeserialize: deserialize_proto_DownloadDocReq,
    responseSerialize: serialize_proto_DownloadDocResp,
    responseDeserialize: deserialize_proto_DownloadDocResp,
  },
  // Encrypt document stream encrypts the document and returns the ciphertext
// back to the user without storing it.
// 
// Requires Login 
encryptDocumentStream: {
    path: '/proto.StrongDocService/EncryptDocumentStream',
    requestStream: true,
    responseStream: true,
    requestType: documentNoStore_pb.EncryptDocStreamReq,
    responseType: documentNoStore_pb.EncryptDocStreamResp,
    requestSerialize: serialize_proto_EncryptDocStreamReq,
    requestDeserialize: deserialize_proto_EncryptDocStreamReq,
    responseSerialize: serialize_proto_EncryptDocStreamResp,
    responseDeserialize: deserialize_proto_EncryptDocStreamResp,
  },
  // This is not available through gRPC REST gateway, 
// since REST api does not support streaming protocol
// Encrypt document encrypts the document and returns the ciphertext
// back to the user without storing it.
// 
// Requires Login 
encryptDocument: {
    path: '/proto.StrongDocService/EncryptDocument',
    requestStream: false,
    responseStream: false,
    requestType: documentNoStore_pb.EncryptDocReq,
    responseType: documentNoStore_pb.EncryptDocResp,
    requestSerialize: serialize_proto_EncryptDocReq,
    requestDeserialize: deserialize_proto_EncryptDocReq,
    responseSerialize: serialize_proto_EncryptDocResp,
    responseDeserialize: deserialize_proto_EncryptDocResp,
  },
  // Decrypt document stream decrypts the ciphertext passed in and returns 
// decrypted plain text back to the user without storing it
// 
// Requires Login 
decryptDocumentStream: {
    path: '/proto.StrongDocService/DecryptDocumentStream',
    requestStream: true,
    responseStream: true,
    requestType: documentNoStore_pb.DecryptDocStreamReq,
    responseType: documentNoStore_pb.DecryptDocStreamResp,
    requestSerialize: serialize_proto_DecryptDocStreamReq,
    requestDeserialize: deserialize_proto_DecryptDocStreamReq,
    responseSerialize: serialize_proto_DecryptDocStreamResp,
    responseDeserialize: deserialize_proto_DecryptDocStreamResp,
  },
  // This is not available through gRPC REST gateway, 
// since REST api does not support streaming protocol
// Decrypt document decrypts the ciphertext passed in and returns 
// decrypted plain text back to the user without storing it
decryptDocument: {
    path: '/proto.StrongDocService/DecryptDocument',
    requestStream: false,
    responseStream: false,
    requestType: documentNoStore_pb.DecryptDocReq,
    responseType: documentNoStore_pb.DecryptDocResp,
    requestSerialize: serialize_proto_DecryptDocReq,
    requestDeserialize: deserialize_proto_DecryptDocReq,
    responseSerialize: serialize_proto_DecryptDocResp,
    responseDeserialize: deserialize_proto_DecryptDocResp,
  },
  // Share a document to another user
//
// Requires Login
shareDocument: {
    path: '/proto.StrongDocService/ShareDocument',
    requestStream: false,
    responseStream: false,
    requestType: document_pb.ShareDocumentRequest,
    responseType: document_pb.ShareDocumentResponse,
    requestSerialize: serialize_proto_ShareDocumentRequest,
    requestDeserialize: deserialize_proto_ShareDocumentRequest,
    responseSerialize: serialize_proto_ShareDocumentResponse,
    responseDeserialize: deserialize_proto_ShareDocumentResponse,
  },
  // Unshare a document that had previously been shared to a user
//
// Requires Login
unshareDocument: {
    path: '/proto.StrongDocService/UnshareDocument',
    requestStream: false,
    responseStream: false,
    requestType: document_pb.UnshareDocumentRequest,
    responseType: document_pb.UnshareDocumentResponse,
    requestSerialize: serialize_proto_UnshareDocumentRequest,
    requestDeserialize: deserialize_proto_UnshareDocumentRequest,
    responseSerialize: serialize_proto_UnshareDocumentResponse,
    responseDeserialize: deserialize_proto_UnshareDocumentResponse,
  },
  // Obtain the size of the user's stored documents
//
// Admin user can see the size of the documents which belong to the company
// 
// Requires Login
getDocumentsSize: {
    path: '/proto.StrongDocService/GetDocumentsSize',
    requestStream: false,
    responseStream: false,
    requestType: document_pb.GetDocumentsSizeRequest,
    responseType: document_pb.GetDocumentsSizeResponse,
    requestSerialize: serialize_proto_GetDocumentsSizeRequest,
    requestDeserialize: deserialize_proto_GetDocumentsSizeRequest,
    responseSerialize: serialize_proto_GetDocumentsSizeResponse,
    responseDeserialize: deserialize_proto_GetDocumentsSizeResponse,
  },
  // Obtain an authentication token to be used with other APIs
//
// An authentication token will be returned after user has been validated
// The returned token will be used as a Bearer Token and need to be set in 
// the request header
login: {
    path: '/proto.StrongDocService/Login',
    requestStream: false,
    responseStream: false,
    requestType: accounts_pb.LoginRequest,
    responseType: accounts_pb.LoginResponse,
    requestSerialize: serialize_proto_LoginRequest,
    requestDeserialize: deserialize_proto_LoginRequest,
    responseSerialize: serialize_proto_LoginResponse,
    responseDeserialize: deserialize_proto_LoginResponse,
  },
  // Logout current user
//
// Requires Login
logout: {
    path: '/proto.StrongDocService/Logout',
    requestStream: false,
    responseStream: false,
    requestType: accounts_pb.LogoutRequest,
    responseType: accounts_pb.LogoutResponse,
    requestSerialize: serialize_proto_LogoutRequest,
    requestDeserialize: deserialize_proto_LogoutRequest,
    responseSerialize: serialize_proto_LogoutResponse,
    responseDeserialize: deserialize_proto_LogoutResponse,
  },
  // Search within a list of user's accessible documents
//
// The response will include a list document id and its score when matches are found
// 
// Requires Login
search: {
    path: '/proto.StrongDocService/Search',
    requestStream: false,
    responseStream: false,
    requestType: search_pb.SearchRequest,
    responseType: search_pb.SearchResponse,
    requestSerialize: serialize_proto_SearchRequest,
    requestDeserialize: deserialize_proto_SearchRequest,
    responseSerialize: serialize_proto_SearchResponse,
    responseDeserialize: deserialize_proto_SearchResponse,
  },
  // Obtain size of the organization's indexes
//
// Requires Login
getIndexSize: {
    path: '/proto.StrongDocService/GetIndexSize',
    requestStream: false,
    responseStream: false,
    requestType: search_pb.GetIndexSizeRequest,
    responseType: search_pb.GetIndexSizeResponse,
    requestSerialize: serialize_proto_GetIndexSizeRequest,
    requestDeserialize: deserialize_proto_GetIndexSizeRequest,
    responseSerialize: serialize_proto_GetIndexSizeResponse,
    responseDeserialize: deserialize_proto_GetIndexSizeResponse,
  },
  // Add a sharable organization to the user's organization.
//
// Requires Administrator privilege.
// Requires Login
addSharableOrg: {
    path: '/proto.StrongDocService/AddSharableOrg',
    requestStream: false,
    responseStream: false,
    requestType: accounts_pb.AddSharableOrgRequest,
    responseType: accounts_pb.AddSharableOrgResponse,
    requestSerialize: serialize_proto_AddSharableOrgRequest,
    requestDeserialize: deserialize_proto_AddSharableOrgRequest,
    responseSerialize: serialize_proto_AddSharableOrgResponse,
    responseDeserialize: deserialize_proto_AddSharableOrgResponse,
  },
  // Remove a sharable organization from the user's organization.
//
// Requires Administrator privilege.
// Requires Login
removeSharableOrg: {
    path: '/proto.StrongDocService/RemoveSharableOrg',
    requestStream: false,
    responseStream: false,
    requestType: accounts_pb.RemoveSharableOrgRequest,
    responseType: accounts_pb.RemoveSharableOrgResponse,
    requestSerialize: serialize_proto_RemoveSharableOrgRequest,
    requestDeserialize: deserialize_proto_RemoveSharableOrgRequest,
    responseSerialize: serialize_proto_RemoveSharableOrgResponse,
    responseDeserialize: deserialize_proto_RemoveSharableOrgResponse,
  },
  // Update the organization's multi-level sharing setting
//
// Requires Administrator privilege.
// Requires Login
setMultiLevelSharing: {
    path: '/proto.StrongDocService/SetMultiLevelSharing',
    requestStream: false,
    responseStream: false,
    requestType: accounts_pb.SetMultiLevelSharingRequest,
    responseType: accounts_pb.SetMultiLevelSharingResponse,
    requestSerialize: serialize_proto_SetMultiLevelSharingRequest,
    requestDeserialize: deserialize_proto_SetMultiLevelSharingRequest,
    responseSerialize: serialize_proto_SetMultiLevelSharingResponse,
    responseDeserialize: deserialize_proto_SetMultiLevelSharingResponse,
  },
  // List all items of the cost breakdown and also other details such as the billing period
//
// Requires Administrator privilege
// Requires Login
getBillingDetails: {
    path: '/proto.StrongDocService/GetBillingDetails',
    requestStream: false,
    responseStream: false,
    requestType: strongdoc_pb.GetBillingDetailsRequest,
    responseType: strongdoc_pb.GetBillingDetailsResponse,
    requestSerialize: serialize_proto_GetBillingDetailsRequest,
    requestDeserialize: deserialize_proto_GetBillingDetailsRequest,
    responseSerialize: serialize_proto_GetBillingDetailsResponse,
    responseDeserialize: deserialize_proto_GetBillingDetailsResponse,
  },
  // Obtain the billing period
//
// Requires Administrator privilege
// Requires Login
getBillingPeriod: {
    path: '/proto.StrongDocService/GetBillingPeriod',
    requestStream: false,
    responseStream: false,
    requestType: strongdoc_pb.GetBillingPeriodRequest,
    responseType: strongdoc_pb.GetBillingPeriodResponse,
    requestSerialize: serialize_proto_GetBillingPeriodRequest,
    requestDeserialize: deserialize_proto_GetBillingPeriodRequest,
    responseSerialize: serialize_proto_GetBillingPeriodResponse,
    responseDeserialize: deserialize_proto_GetBillingPeriodResponse,
  },
  // Change the billing period
//
// Requires Administrator privilege
// Requires Login
setBillingPeriod: {
    path: '/proto.StrongDocService/SetBillingPeriod',
    requestStream: false,
    responseStream: false,
    requestType: strongdoc_pb.SetBillingPeriodRequest,
    responseType: strongdoc_pb.SetBillingPeriodResponse,
    requestSerialize: serialize_proto_SetBillingPeriodRequest,
    requestDeserialize: deserialize_proto_SetBillingPeriodRequest,
    responseSerialize: serialize_proto_SetBillingPeriodResponse,
    responseDeserialize: deserialize_proto_SetBillingPeriodResponse,
  },
  // Show current server configuration
//
// Requires Administrator privilege. Only an administrator can see server configuration
// Requires Login
getConfiguration: {
    path: '/proto.StrongDocService/GetConfiguration',
    requestStream: false,
    responseStream: false,
    requestType: strongdoc_pb.GetConfigurationReq,
    responseType: strongdoc_pb.GetConfigurationResp,
    requestSerialize: serialize_proto_GetConfigurationReq,
    requestDeserialize: deserialize_proto_GetConfigurationReq,
    responseSerialize: serialize_proto_GetConfigurationResp,
    responseDeserialize: deserialize_proto_GetConfigurationResp,
  },
};

exports.StrongDocServiceClient = grpc.makeGenericClientConstructor(StrongDocServiceService);
