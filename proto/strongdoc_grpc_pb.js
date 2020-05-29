// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var strongdoc_pb = require('./strongdoc_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
var protoc$gen$swagger_options_annotations_pb = require('./protoc-gen-swagger/options/annotations_pb.js');
var document_pb = require('./document_pb.js');
var documentNoStore_pb = require('./documentNoStore_pb.js');
var search_pb = require('./search_pb.js');
var accounts_pb = require('./accounts_pb.js');
var billing_pb = require('./billing_pb.js');

function serialize_proto_AddPaymentMethodReq(arg) {
  if (!(arg instanceof billing_pb.AddPaymentMethodReq)) {
    throw new Error('Expected argument of type proto.AddPaymentMethodReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_AddPaymentMethodReq(buffer_arg) {
  return billing_pb.AddPaymentMethodReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_AddPaymentMethodResp(arg) {
  if (!(arg instanceof billing_pb.AddPaymentMethodResp)) {
    throw new Error('Expected argument of type proto.AddPaymentMethodResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_AddPaymentMethodResp(buffer_arg) {
  return billing_pb.AddPaymentMethodResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_AddSharableOrgReq(arg) {
  if (!(arg instanceof accounts_pb.AddSharableOrgReq)) {
    throw new Error('Expected argument of type proto.AddSharableOrgReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_AddSharableOrgReq(buffer_arg) {
  return accounts_pb.AddSharableOrgReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_AddSharableOrgResp(arg) {
  if (!(arg instanceof accounts_pb.AddSharableOrgResp)) {
    throw new Error('Expected argument of type proto.AddSharableOrgResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_AddSharableOrgResp(buffer_arg) {
  return accounts_pb.AddSharableOrgResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ChangeUserPasswordReq(arg) {
  if (!(arg instanceof accounts_pb.ChangeUserPasswordReq)) {
    throw new Error('Expected argument of type proto.ChangeUserPasswordReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ChangeUserPasswordReq(buffer_arg) {
  return accounts_pb.ChangeUserPasswordReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ChangeUserPasswordResp(arg) {
  if (!(arg instanceof accounts_pb.ChangeUserPasswordResp)) {
    throw new Error('Expected argument of type proto.ChangeUserPasswordResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ChangeUserPasswordResp(buffer_arg) {
  return accounts_pb.ChangeUserPasswordResp.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_proto_DemoteUserReq(arg) {
  if (!(arg instanceof accounts_pb.DemoteUserReq)) {
    throw new Error('Expected argument of type proto.DemoteUserReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_DemoteUserReq(buffer_arg) {
  return accounts_pb.DemoteUserReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_DemoteUserResp(arg) {
  if (!(arg instanceof accounts_pb.DemoteUserResp)) {
    throw new Error('Expected argument of type proto.DemoteUserResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_DemoteUserResp(buffer_arg) {
  return accounts_pb.DemoteUserResp.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_proto_GetAccountInfoReq(arg) {
  if (!(arg instanceof accounts_pb.GetAccountInfoReq)) {
    throw new Error('Expected argument of type proto.GetAccountInfoReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetAccountInfoReq(buffer_arg) {
  return accounts_pb.GetAccountInfoReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetAccountInfoResp(arg) {
  if (!(arg instanceof accounts_pb.GetAccountInfoResp)) {
    throw new Error('Expected argument of type proto.GetAccountInfoResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetAccountInfoResp(buffer_arg) {
  return accounts_pb.GetAccountInfoResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetBillingDetailsReq(arg) {
  if (!(arg instanceof billing_pb.GetBillingDetailsReq)) {
    throw new Error('Expected argument of type proto.GetBillingDetailsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetBillingDetailsReq(buffer_arg) {
  return billing_pb.GetBillingDetailsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetBillingDetailsResp(arg) {
  if (!(arg instanceof billing_pb.GetBillingDetailsResp)) {
    throw new Error('Expected argument of type proto.GetBillingDetailsResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetBillingDetailsResp(buffer_arg) {
  return billing_pb.GetBillingDetailsResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetBillingFrequencyListReq(arg) {
  if (!(arg instanceof billing_pb.GetBillingFrequencyListReq)) {
    throw new Error('Expected argument of type proto.GetBillingFrequencyListReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetBillingFrequencyListReq(buffer_arg) {
  return billing_pb.GetBillingFrequencyListReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetBillingFrequencyListResp(arg) {
  if (!(arg instanceof billing_pb.GetBillingFrequencyListResp)) {
    throw new Error('Expected argument of type proto.GetBillingFrequencyListResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetBillingFrequencyListResp(buffer_arg) {
  return billing_pb.GetBillingFrequencyListResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetLargeTrafficReq(arg) {
  if (!(arg instanceof billing_pb.GetLargeTrafficReq)) {
    throw new Error('Expected argument of type proto.GetLargeTrafficReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetLargeTrafficReq(buffer_arg) {
  return billing_pb.GetLargeTrafficReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetLargeTrafficResp(arg) {
  if (!(arg instanceof billing_pb.GetLargeTrafficResp)) {
    throw new Error('Expected argument of type proto.GetLargeTrafficResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetLargeTrafficResp(buffer_arg) {
  return billing_pb.GetLargeTrafficResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetUserInfoReq(arg) {
  if (!(arg instanceof accounts_pb.GetUserInfoReq)) {
    throw new Error('Expected argument of type proto.GetUserInfoReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetUserInfoReq(buffer_arg) {
  return accounts_pb.GetUserInfoReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetUserInfoResp(arg) {
  if (!(arg instanceof accounts_pb.GetUserInfoResp)) {
    throw new Error('Expected argument of type proto.GetUserInfoResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetUserInfoResp(buffer_arg) {
  return accounts_pb.GetUserInfoResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ListCreditCardsReq(arg) {
  if (!(arg instanceof billing_pb.ListCreditCardsReq)) {
    throw new Error('Expected argument of type proto.ListCreditCardsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ListCreditCardsReq(buffer_arg) {
  return billing_pb.ListCreditCardsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ListCreditCardsResp(arg) {
  if (!(arg instanceof billing_pb.ListCreditCardsResp)) {
    throw new Error('Expected argument of type proto.ListCreditCardsResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ListCreditCardsResp(buffer_arg) {
  return billing_pb.ListCreditCardsResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ListDocumentsReq(arg) {
  if (!(arg instanceof document_pb.ListDocumentsReq)) {
    throw new Error('Expected argument of type proto.ListDocumentsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ListDocumentsReq(buffer_arg) {
  return document_pb.ListDocumentsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ListDocumentsResp(arg) {
  if (!(arg instanceof document_pb.ListDocumentsResp)) {
    throw new Error('Expected argument of type proto.ListDocumentsResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ListDocumentsResp(buffer_arg) {
  return document_pb.ListDocumentsResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ListUsersReq(arg) {
  if (!(arg instanceof accounts_pb.ListUsersReq)) {
    throw new Error('Expected argument of type proto.ListUsersReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ListUsersReq(buffer_arg) {
  return accounts_pb.ListUsersReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ListUsersResp(arg) {
  if (!(arg instanceof accounts_pb.ListUsersResp)) {
    throw new Error('Expected argument of type proto.ListUsersResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ListUsersResp(buffer_arg) {
  return accounts_pb.ListUsersResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_LoginReq(arg) {
  if (!(arg instanceof accounts_pb.LoginReq)) {
    throw new Error('Expected argument of type proto.LoginReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_LoginReq(buffer_arg) {
  return accounts_pb.LoginReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_LoginResp(arg) {
  if (!(arg instanceof accounts_pb.LoginResp)) {
    throw new Error('Expected argument of type proto.LoginResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_LoginResp(buffer_arg) {
  return accounts_pb.LoginResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_LogoutReq(arg) {
  if (!(arg instanceof accounts_pb.LogoutReq)) {
    throw new Error('Expected argument of type proto.LogoutReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_LogoutReq(buffer_arg) {
  return accounts_pb.LogoutReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_LogoutResp(arg) {
  if (!(arg instanceof accounts_pb.LogoutResp)) {
    throw new Error('Expected argument of type proto.LogoutResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_LogoutResp(buffer_arg) {
  return accounts_pb.LogoutResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_PromoteUserReq(arg) {
  if (!(arg instanceof accounts_pb.PromoteUserReq)) {
    throw new Error('Expected argument of type proto.PromoteUserReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_PromoteUserReq(buffer_arg) {
  return accounts_pb.PromoteUserReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_PromoteUserResp(arg) {
  if (!(arg instanceof accounts_pb.PromoteUserResp)) {
    throw new Error('Expected argument of type proto.PromoteUserResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_PromoteUserResp(buffer_arg) {
  return accounts_pb.PromoteUserResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RegisterOrganizationReq(arg) {
  if (!(arg instanceof accounts_pb.RegisterOrganizationReq)) {
    throw new Error('Expected argument of type proto.RegisterOrganizationReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RegisterOrganizationReq(buffer_arg) {
  return accounts_pb.RegisterOrganizationReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RegisterOrganizationResp(arg) {
  if (!(arg instanceof accounts_pb.RegisterOrganizationResp)) {
    throw new Error('Expected argument of type proto.RegisterOrganizationResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RegisterOrganizationResp(buffer_arg) {
  return accounts_pb.RegisterOrganizationResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RegisterUserReq(arg) {
  if (!(arg instanceof accounts_pb.RegisterUserReq)) {
    throw new Error('Expected argument of type proto.RegisterUserReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RegisterUserReq(buffer_arg) {
  return accounts_pb.RegisterUserReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RegisterUserResp(arg) {
  if (!(arg instanceof accounts_pb.RegisterUserResp)) {
    throw new Error('Expected argument of type proto.RegisterUserResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RegisterUserResp(buffer_arg) {
  return accounts_pb.RegisterUserResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RemoveDocumentReq(arg) {
  if (!(arg instanceof document_pb.RemoveDocumentReq)) {
    throw new Error('Expected argument of type proto.RemoveDocumentReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RemoveDocumentReq(buffer_arg) {
  return document_pb.RemoveDocumentReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RemoveDocumentResp(arg) {
  if (!(arg instanceof document_pb.RemoveDocumentResp)) {
    throw new Error('Expected argument of type proto.RemoveDocumentResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RemoveDocumentResp(buffer_arg) {
  return document_pb.RemoveDocumentResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RemoveOrganizationReq(arg) {
  if (!(arg instanceof accounts_pb.RemoveOrganizationReq)) {
    throw new Error('Expected argument of type proto.RemoveOrganizationReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RemoveOrganizationReq(buffer_arg) {
  return accounts_pb.RemoveOrganizationReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RemoveOrganizationResp(arg) {
  if (!(arg instanceof accounts_pb.RemoveOrganizationResp)) {
    throw new Error('Expected argument of type proto.RemoveOrganizationResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RemoveOrganizationResp(buffer_arg) {
  return accounts_pb.RemoveOrganizationResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RemovePaymentMethodReq(arg) {
  if (!(arg instanceof billing_pb.RemovePaymentMethodReq)) {
    throw new Error('Expected argument of type proto.RemovePaymentMethodReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RemovePaymentMethodReq(buffer_arg) {
  return billing_pb.RemovePaymentMethodReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RemovePaymentMethodResp(arg) {
  if (!(arg instanceof billing_pb.RemovePaymentMethodResp)) {
    throw new Error('Expected argument of type proto.RemovePaymentMethodResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RemovePaymentMethodResp(buffer_arg) {
  return billing_pb.RemovePaymentMethodResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RemoveSharableOrgReq(arg) {
  if (!(arg instanceof accounts_pb.RemoveSharableOrgReq)) {
    throw new Error('Expected argument of type proto.RemoveSharableOrgReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RemoveSharableOrgReq(buffer_arg) {
  return accounts_pb.RemoveSharableOrgReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RemoveSharableOrgResp(arg) {
  if (!(arg instanceof accounts_pb.RemoveSharableOrgResp)) {
    throw new Error('Expected argument of type proto.RemoveSharableOrgResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RemoveSharableOrgResp(buffer_arg) {
  return accounts_pb.RemoveSharableOrgResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RemoveUserReq(arg) {
  if (!(arg instanceof accounts_pb.RemoveUserReq)) {
    throw new Error('Expected argument of type proto.RemoveUserReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RemoveUserReq(buffer_arg) {
  return accounts_pb.RemoveUserReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RemoveUserResp(arg) {
  if (!(arg instanceof accounts_pb.RemoveUserResp)) {
    throw new Error('Expected argument of type proto.RemoveUserResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RemoveUserResp(buffer_arg) {
  return accounts_pb.RemoveUserResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SearchReq(arg) {
  if (!(arg instanceof search_pb.SearchReq)) {
    throw new Error('Expected argument of type proto.SearchReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SearchReq(buffer_arg) {
  return search_pb.SearchReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SearchResp(arg) {
  if (!(arg instanceof search_pb.SearchResp)) {
    throw new Error('Expected argument of type proto.SearchResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SearchResp(buffer_arg) {
  return search_pb.SearchResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SetAccountInfoReq(arg) {
  if (!(arg instanceof accounts_pb.SetAccountInfoReq)) {
    throw new Error('Expected argument of type proto.SetAccountInfoReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SetAccountInfoReq(buffer_arg) {
  return accounts_pb.SetAccountInfoReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SetAccountInfoResp(arg) {
  if (!(arg instanceof accounts_pb.SetAccountInfoResp)) {
    throw new Error('Expected argument of type proto.SetAccountInfoResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SetAccountInfoResp(buffer_arg) {
  return accounts_pb.SetAccountInfoResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SetDefaultPaymentMethodReq(arg) {
  if (!(arg instanceof billing_pb.SetDefaultPaymentMethodReq)) {
    throw new Error('Expected argument of type proto.SetDefaultPaymentMethodReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SetDefaultPaymentMethodReq(buffer_arg) {
  return billing_pb.SetDefaultPaymentMethodReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SetDefaultPaymentMethodResp(arg) {
  if (!(arg instanceof billing_pb.SetDefaultPaymentMethodResp)) {
    throw new Error('Expected argument of type proto.SetDefaultPaymentMethodResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SetDefaultPaymentMethodResp(buffer_arg) {
  return billing_pb.SetDefaultPaymentMethodResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SetMultiLevelSharingReq(arg) {
  if (!(arg instanceof accounts_pb.SetMultiLevelSharingReq)) {
    throw new Error('Expected argument of type proto.SetMultiLevelSharingReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SetMultiLevelSharingReq(buffer_arg) {
  return accounts_pb.SetMultiLevelSharingReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SetMultiLevelSharingResp(arg) {
  if (!(arg instanceof accounts_pb.SetMultiLevelSharingResp)) {
    throw new Error('Expected argument of type proto.SetMultiLevelSharingResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SetMultiLevelSharingResp(buffer_arg) {
  return accounts_pb.SetMultiLevelSharingResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SetNextBillingFrequencyReq(arg) {
  if (!(arg instanceof billing_pb.SetNextBillingFrequencyReq)) {
    throw new Error('Expected argument of type proto.SetNextBillingFrequencyReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SetNextBillingFrequencyReq(buffer_arg) {
  return billing_pb.SetNextBillingFrequencyReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SetNextBillingFrequencyResp(arg) {
  if (!(arg instanceof billing_pb.SetNextBillingFrequencyResp)) {
    throw new Error('Expected argument of type proto.SetNextBillingFrequencyResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SetNextBillingFrequencyResp(buffer_arg) {
  return billing_pb.SetNextBillingFrequencyResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SetUserInfoReq(arg) {
  if (!(arg instanceof accounts_pb.SetUserInfoReq)) {
    throw new Error('Expected argument of type proto.SetUserInfoReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SetUserInfoReq(buffer_arg) {
  return accounts_pb.SetUserInfoReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SetUserInfoResp(arg) {
  if (!(arg instanceof accounts_pb.SetUserInfoResp)) {
    throw new Error('Expected argument of type proto.SetUserInfoResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SetUserInfoResp(buffer_arg) {
  return accounts_pb.SetUserInfoResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ShareDocumentReq(arg) {
  if (!(arg instanceof document_pb.ShareDocumentReq)) {
    throw new Error('Expected argument of type proto.ShareDocumentReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ShareDocumentReq(buffer_arg) {
  return document_pb.ShareDocumentReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ShareDocumentResp(arg) {
  if (!(arg instanceof document_pb.ShareDocumentResp)) {
    throw new Error('Expected argument of type proto.ShareDocumentResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ShareDocumentResp(buffer_arg) {
  return document_pb.ShareDocumentResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_UnshareDocumentReq(arg) {
  if (!(arg instanceof document_pb.UnshareDocumentReq)) {
    throw new Error('Expected argument of type proto.UnshareDocumentReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_UnshareDocumentReq(buffer_arg) {
  return document_pb.UnshareDocumentReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_UnshareDocumentResp(arg) {
  if (!(arg instanceof document_pb.UnshareDocumentResp)) {
    throw new Error('Expected argument of type proto.UnshareDocumentResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_UnshareDocumentResp(buffer_arg) {
  return document_pb.UnshareDocumentResp.deserializeBinary(new Uint8Array(buffer_arg));
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
    requestType: accounts_pb.RegisterOrganizationReq,
    responseType: accounts_pb.RegisterOrganizationResp,
    requestSerialize: serialize_proto_RegisterOrganizationReq,
    requestDeserialize: deserialize_proto_RegisterOrganizationReq,
    responseSerialize: serialize_proto_RegisterOrganizationResp,
    responseDeserialize: deserialize_proto_RegisterOrganizationResp,
  },
  // Reactivate an organization that was unsubscribed via aws
  //
  // The user reactivating the organization becomes the administrator
  //
  // Does not require login
  reactivateOrganization: {
    path: '/proto.StrongDocService/ReactivateOrganization',
    requestStream: false,
    responseStream: false,
    requestType: accounts_pb.RegisterOrganizationReq,
    responseType: accounts_pb.RegisterOrganizationResp,
    requestSerialize: serialize_proto_RegisterOrganizationReq,
    requestDeserialize: deserialize_proto_RegisterOrganizationReq,
    responseSerialize: serialize_proto_RegisterOrganizationResp,
    responseDeserialize: deserialize_proto_RegisterOrganizationResp,
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
    requestType: accounts_pb.RemoveOrganizationReq,
    responseType: accounts_pb.RemoveOrganizationResp,
    requestSerialize: serialize_proto_RemoveOrganizationReq,
    requestDeserialize: deserialize_proto_RemoveOrganizationReq,
    responseSerialize: serialize_proto_RemoveOrganizationResp,
    responseDeserialize: deserialize_proto_RemoveOrganizationResp,
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
    requestType: accounts_pb.RegisterUserReq,
    responseType: accounts_pb.RegisterUserResp,
    requestSerialize: serialize_proto_RegisterUserReq,
    requestDeserialize: deserialize_proto_RegisterUserReq,
    responseSerialize: serialize_proto_RegisterUserResp,
    responseDeserialize: deserialize_proto_RegisterUserResp,
  },
  // rpc GetUserInfo(GetUserInfoReq) returns (GetUserInfoResp) {
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
    requestType: accounts_pb.ListUsersReq,
    responseType: accounts_pb.ListUsersResp,
    requestSerialize: serialize_proto_ListUsersReq,
    requestDeserialize: deserialize_proto_ListUsersReq,
    responseSerialize: serialize_proto_ListUsersResp,
    responseDeserialize: deserialize_proto_ListUsersResp,
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
    requestType: accounts_pb.RemoveUserReq,
    responseType: accounts_pb.RemoveUserResp,
    requestSerialize: serialize_proto_RemoveUserReq,
    requestDeserialize: deserialize_proto_RemoveUserReq,
    responseSerialize: serialize_proto_RemoveUserResp,
    responseDeserialize: deserialize_proto_RemoveUserResp,
  },
  // Promote a regular user to administrator at the organization
  //
  // Requires administrator privilege.
  promoteUser: {
    path: '/proto.StrongDocService/PromoteUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_pb.PromoteUserReq,
    responseType: accounts_pb.PromoteUserResp,
    requestSerialize: serialize_proto_PromoteUserReq,
    requestDeserialize: deserialize_proto_PromoteUserReq,
    responseSerialize: serialize_proto_PromoteUserResp,
    responseDeserialize: deserialize_proto_PromoteUserResp,
  },
  // Demote administrator to regular user at the organization. Attempting to
  // demote the last administrator of an organization will fail
  //
  // Requires administrator privilege.
  demoteUser: {
    path: '/proto.StrongDocService/DemoteUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_pb.DemoteUserReq,
    responseType: accounts_pb.DemoteUserResp,
    requestSerialize: serialize_proto_DemoteUserReq,
    requestDeserialize: deserialize_proto_DemoteUserReq,
    responseSerialize: serialize_proto_DemoteUserResp,
    responseDeserialize: deserialize_proto_DemoteUserResp,
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
    requestType: document_pb.ListDocumentsReq,
    responseType: document_pb.ListDocumentsResp,
    requestSerialize: serialize_proto_ListDocumentsReq,
    requestDeserialize: deserialize_proto_ListDocumentsReq,
    responseSerialize: serialize_proto_ListDocumentsResp,
    responseDeserialize: deserialize_proto_ListDocumentsResp,
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
    requestType: document_pb.RemoveDocumentReq,
    responseType: document_pb.RemoveDocumentResp,
    requestSerialize: serialize_proto_RemoveDocumentReq,
    requestDeserialize: deserialize_proto_RemoveDocumentReq,
    responseSerialize: serialize_proto_RemoveDocumentResp,
    responseDeserialize: deserialize_proto_RemoveDocumentResp,
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
    requestType: document_pb.ShareDocumentReq,
    responseType: document_pb.ShareDocumentResp,
    requestSerialize: serialize_proto_ShareDocumentReq,
    requestDeserialize: deserialize_proto_ShareDocumentReq,
    responseSerialize: serialize_proto_ShareDocumentResp,
    responseDeserialize: deserialize_proto_ShareDocumentResp,
  },
  // Unshare a document that had previously been shared to a user
  //
  // Requires Login
  unshareDocument: {
    path: '/proto.StrongDocService/UnshareDocument',
    requestStream: false,
    responseStream: false,
    requestType: document_pb.UnshareDocumentReq,
    responseType: document_pb.UnshareDocumentResp,
    requestSerialize: serialize_proto_UnshareDocumentReq,
    requestDeserialize: deserialize_proto_UnshareDocumentReq,
    responseSerialize: serialize_proto_UnshareDocumentResp,
    responseDeserialize: deserialize_proto_UnshareDocumentResp,
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
    requestType: accounts_pb.LoginReq,
    responseType: accounts_pb.LoginResp,
    requestSerialize: serialize_proto_LoginReq,
    requestDeserialize: deserialize_proto_LoginReq,
    responseSerialize: serialize_proto_LoginResp,
    responseDeserialize: deserialize_proto_LoginResp,
  },
  // Logout current user
  //
  // Requires Login
  logout: {
    path: '/proto.StrongDocService/Logout',
    requestStream: false,
    responseStream: false,
    requestType: accounts_pb.LogoutReq,
    responseType: accounts_pb.LogoutResp,
    requestSerialize: serialize_proto_LogoutReq,
    requestDeserialize: deserialize_proto_LogoutReq,
    responseSerialize: serialize_proto_LogoutResp,
    responseDeserialize: deserialize_proto_LogoutResp,
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
    requestType: search_pb.SearchReq,
    responseType: search_pb.SearchResp,
    requestSerialize: serialize_proto_SearchReq,
    requestDeserialize: deserialize_proto_SearchReq,
    responseSerialize: serialize_proto_SearchResp,
    responseDeserialize: deserialize_proto_SearchResp,
  },
  // Add a sharable organization to the user's organization.
  //
  // Requires Administrator privilege.
  // Requires Login
  addSharableOrg: {
    path: '/proto.StrongDocService/AddSharableOrg',
    requestStream: false,
    responseStream: false,
    requestType: accounts_pb.AddSharableOrgReq,
    responseType: accounts_pb.AddSharableOrgResp,
    requestSerialize: serialize_proto_AddSharableOrgReq,
    requestDeserialize: deserialize_proto_AddSharableOrgReq,
    responseSerialize: serialize_proto_AddSharableOrgResp,
    responseDeserialize: deserialize_proto_AddSharableOrgResp,
  },
  // Remove a sharable organization from the user's organization.
  //
  // Requires Administrator privilege.
  // Requires Login
  removeSharableOrg: {
    path: '/proto.StrongDocService/RemoveSharableOrg',
    requestStream: false,
    responseStream: false,
    requestType: accounts_pb.RemoveSharableOrgReq,
    responseType: accounts_pb.RemoveSharableOrgResp,
    requestSerialize: serialize_proto_RemoveSharableOrgReq,
    requestDeserialize: deserialize_proto_RemoveSharableOrgReq,
    responseSerialize: serialize_proto_RemoveSharableOrgResp,
    responseDeserialize: deserialize_proto_RemoveSharableOrgResp,
  },
  // Update the organization's multi-level sharing setting
  //
  // Requires Administrator privilege.
  // Requires Login
  setMultiLevelSharing: {
    path: '/proto.StrongDocService/SetMultiLevelSharing',
    requestStream: false,
    responseStream: false,
    requestType: accounts_pb.SetMultiLevelSharingReq,
    responseType: accounts_pb.SetMultiLevelSharingResp,
    requestSerialize: serialize_proto_SetMultiLevelSharingReq,
    requestDeserialize: deserialize_proto_SetMultiLevelSharingReq,
    responseSerialize: serialize_proto_SetMultiLevelSharingResp,
    responseDeserialize: deserialize_proto_SetMultiLevelSharingResp,
  },
  // Update the organization's account info
  //
  // Requires Administrator privilege.
  // Requires Login
  setAccountInfo: {
    path: '/proto.StrongDocService/SetAccountInfo',
    requestStream: false,
    responseStream: false,
    requestType: accounts_pb.SetAccountInfoReq,
    responseType: accounts_pb.SetAccountInfoResp,
    requestSerialize: serialize_proto_SetAccountInfoReq,
    requestDeserialize: deserialize_proto_SetAccountInfoReq,
    responseSerialize: serialize_proto_SetAccountInfoResp,
    responseDeserialize: deserialize_proto_SetAccountInfoResp,
  },
  // List all items of the cost breakdown and also other details such as the billing frequency
  //
  // Requires Administrator privilege
  // Requires Login
  getBillingDetails: {
    path: '/proto.StrongDocService/GetBillingDetails',
    requestStream: false,
    responseStream: false,
    requestType: billing_pb.GetBillingDetailsReq,
    responseType: billing_pb.GetBillingDetailsResp,
    requestSerialize: serialize_proto_GetBillingDetailsReq,
    requestDeserialize: deserialize_proto_GetBillingDetailsReq,
    responseSerialize: serialize_proto_GetBillingDetailsResp,
    responseDeserialize: deserialize_proto_GetBillingDetailsResp,
  },
  // Obtain the list of billing frequencies (past, current and future)
  //
  // Requires Administrator privilege
  // Requires Login
  getBillingFrequencyList: {
    path: '/proto.StrongDocService/GetBillingFrequencyList',
    requestStream: false,
    responseStream: false,
    requestType: billing_pb.GetBillingFrequencyListReq,
    responseType: billing_pb.GetBillingFrequencyListResp,
    requestSerialize: serialize_proto_GetBillingFrequencyListReq,
    requestDeserialize: deserialize_proto_GetBillingFrequencyListReq,
    responseSerialize: serialize_proto_GetBillingFrequencyListResp,
    responseDeserialize: deserialize_proto_GetBillingFrequencyListResp,
  },
  // Change the next billing frequency
  //
  // Requires Administrator privilege
  // Requires Login
  setNextBillingFrequency: {
    path: '/proto.StrongDocService/SetNextBillingFrequency',
    requestStream: false,
    responseStream: false,
    requestType: billing_pb.SetNextBillingFrequencyReq,
    responseType: billing_pb.SetNextBillingFrequencyResp,
    requestSerialize: serialize_proto_SetNextBillingFrequencyReq,
    requestDeserialize: deserialize_proto_SetNextBillingFrequencyReq,
    responseSerialize: serialize_proto_SetNextBillingFrequencyResp,
    responseDeserialize: deserialize_proto_SetNextBillingFrequencyResp,
  },
  // Obtain the list of large traffic usages
  //
  // Requires Administrator privilege
  // Requires Login
  getLargeTraffic: {
    path: '/proto.StrongDocService/GetLargeTraffic',
    requestStream: false,
    responseStream: false,
    requestType: billing_pb.GetLargeTrafficReq,
    responseType: billing_pb.GetLargeTrafficResp,
    requestSerialize: serialize_proto_GetLargeTrafficReq,
    requestDeserialize: deserialize_proto_GetLargeTrafficReq,
    responseSerialize: serialize_proto_GetLargeTrafficResp,
    responseDeserialize: deserialize_proto_GetLargeTrafficResp,
  },
  // Obtain information about the account
  //
  // Requires Administrator privilege
  // Requires Login
  getAccountInfo: {
    path: '/proto.StrongDocService/GetAccountInfo',
    requestStream: false,
    responseStream: false,
    requestType: accounts_pb.GetAccountInfoReq,
    responseType: accounts_pb.GetAccountInfoResp,
    requestSerialize: serialize_proto_GetAccountInfoReq,
    requestDeserialize: deserialize_proto_GetAccountInfoReq,
    responseSerialize: serialize_proto_GetAccountInfoResp,
    responseDeserialize: deserialize_proto_GetAccountInfoResp,
  },
  // Obtain information about logged in user
  //
  // Requires Login
  getUserInfo: {
    path: '/proto.StrongDocService/GetUserInfo',
    requestStream: false,
    responseStream: false,
    requestType: accounts_pb.GetUserInfoReq,
    responseType: accounts_pb.GetUserInfoResp,
    requestSerialize: serialize_proto_GetUserInfoReq,
    requestDeserialize: deserialize_proto_GetUserInfoReq,
    responseSerialize: serialize_proto_GetUserInfoResp,
    responseDeserialize: deserialize_proto_GetUserInfoResp,
  },
  // Change the password of a logged in user
  //
  // Requires Login
  changeUserPassword: {
    path: '/proto.StrongDocService/ChangeUserPassword',
    requestStream: false,
    responseStream: false,
    requestType: accounts_pb.ChangeUserPasswordReq,
    responseType: accounts_pb.ChangeUserPasswordResp,
    requestSerialize: serialize_proto_ChangeUserPasswordReq,
    requestDeserialize: deserialize_proto_ChangeUserPasswordReq,
    responseSerialize: serialize_proto_ChangeUserPasswordResp,
    responseDeserialize: deserialize_proto_ChangeUserPasswordResp,
  },
  // Set information about a logged in user
  //
  // Requires Login
  setUserInfo: {
    path: '/proto.StrongDocService/SetUserInfo',
    requestStream: false,
    responseStream: false,
    requestType: accounts_pb.SetUserInfoReq,
    responseType: accounts_pb.SetUserInfoResp,
    requestSerialize: serialize_proto_SetUserInfoReq,
    requestDeserialize: deserialize_proto_SetUserInfoReq,
    responseSerialize: serialize_proto_SetUserInfoResp,
    responseDeserialize: deserialize_proto_SetUserInfoResp,
  },
  // Obtain a list of the org's credit cards
  //
  // Requires Administrator privilege
  // Requires Login
  listCreditCards: {
    path: '/proto.StrongDocService/ListCreditCards',
    requestStream: false,
    responseStream: false,
    requestType: billing_pb.ListCreditCardsReq,
    responseType: billing_pb.ListCreditCardsResp,
    requestSerialize: serialize_proto_ListCreditCardsReq,
    requestDeserialize: deserialize_proto_ListCreditCardsReq,
    responseSerialize: serialize_proto_ListCreditCardsResp,
    responseDeserialize: deserialize_proto_ListCreditCardsResp,
  },
  // Add a payment method to the customer and validate the payment method
  //
  // Requires Administrator privilege
  // Requires Login
  addPaymentMethod: {
    path: '/proto.StrongDocService/AddPaymentMethod',
    requestStream: false,
    responseStream: false,
    requestType: billing_pb.AddPaymentMethodReq,
    responseType: billing_pb.AddPaymentMethodResp,
    requestSerialize: serialize_proto_AddPaymentMethodReq,
    requestDeserialize: deserialize_proto_AddPaymentMethodReq,
    responseSerialize: serialize_proto_AddPaymentMethodResp,
    responseDeserialize: deserialize_proto_AddPaymentMethodResp,
  },
  // Set the default payment method for a stripe customer
  //
  // Requires Administrator privilege
  // Requires Login
  setDefaultPaymentMethod: {
    path: '/proto.StrongDocService/SetDefaultPaymentMethod',
    requestStream: false,
    responseStream: false,
    requestType: billing_pb.SetDefaultPaymentMethodReq,
    responseType: billing_pb.SetDefaultPaymentMethodResp,
    requestSerialize: serialize_proto_SetDefaultPaymentMethodReq,
    requestDeserialize: deserialize_proto_SetDefaultPaymentMethodReq,
    responseSerialize: serialize_proto_SetDefaultPaymentMethodResp,
    responseDeserialize: deserialize_proto_SetDefaultPaymentMethodResp,
  },
  // Remove a payment method for a stripe customer
  //
  // Requires Administrator privilege
  // Requires Login
  removePaymentMethod: {
    path: '/proto.StrongDocService/RemovePaymentMethod',
    requestStream: false,
    responseStream: false,
    requestType: billing_pb.RemovePaymentMethodReq,
    responseType: billing_pb.RemovePaymentMethodResp,
    requestSerialize: serialize_proto_RemovePaymentMethodReq,
    requestDeserialize: deserialize_proto_RemovePaymentMethodReq,
    responseSerialize: serialize_proto_RemovePaymentMethodResp,
    responseDeserialize: deserialize_proto_RemovePaymentMethodResp,
  },
};

exports.StrongDocServiceClient = grpc.makeGenericClientConstructor(StrongDocServiceService);
