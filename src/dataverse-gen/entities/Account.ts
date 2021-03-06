/* eslint-disable*/
import { IEntity } from "dataverse-ify";
// Entity Account
export const accountMetadata = {
  typeName: "mscrm.account",
  logicalName: "account",
  collectionName: "accounts",
  primaryIdAttribute: "accountid",
  attributeTypes: {
    // Numeric Types
    address1_latitude: "Double",
    address1_longitude: "Double",
    address1_utcoffset: "Integer",
    address2_latitude: "Double",
    address2_longitude: "Double",
    address2_utcoffset: "Integer",
    adx_activeopportunitycount: "Integer",
    adx_averagetimetocloseanopportunity: "Double",
    adx_currentpartnercapacity: "Integer",
    adx_feedbackrate: "Double",
    adx_lossrate: "Double",
    adx_maximumopportunityrevenue: "Money",
    adx_maximumopportunityrevenue_base: "Money",
    adx_minimumopportunityrevenue: "Money",
    adx_minimumopportunityrevenue_base: "Money",
    adx_numberofopportunitiesaccepted: "Integer",
    adx_numberofopportunitiesdeclined: "Integer",
    adx_numberofopportunitiesdelivered: "Integer",
    adx_numberofopportunitieswithfeedback: "Integer",
    adx_numberofopportunitieswon: "Integer",
    adx_numberofreturnedopportunities: "Integer",
    adx_partnerranking: "Double",
    adx_returnrate: "Double",
    adx_stallrate: "Double",
    adx_touchrate: "Double",
    adx_winrate: "Double",
    aging30: "Money",
    aging30_base: "Money",
    aging60: "Money",
    aging60_base: "Money",
    aging90: "Money",
    aging90_base: "Money",
    creditlimit: "Money",
    creditlimit_base: "Money",
    dev1_calculated: "Integer",
    dev1_rollup: "Integer",
    dev1_rollup_state: "Integer",
    entityimage_timestamp: "BigInt",
    exchangerate: "Decimal",
    importsequencenumber: "Integer",
    marketcap: "Money",
    marketcap_base: "Money",
    msdyn_travelcharge: "Money",
    msdyn_travelcharge_base: "Money",
    numberofemployees: "Integer",
    onholdtime: "Integer",
    opendeals: "Integer",
    opendeals_state: "Integer",
    openrevenue: "Money",
    openrevenue_base: "Money",
    openrevenue_state: "Integer",
    revenue: "Money",
    revenue_base: "Money",
    sharesoutstanding: "Integer",
    teamsfollowed: "Integer",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    accountcategorycode: "Optionset",
    accountclassificationcode: "Optionset",
    accountratingcode: "Optionset",
    address1_addresstypecode: "Optionset",
    address1_freighttermscode: "Optionset",
    address1_shippingmethodcode: "Optionset",
    address2_addresstypecode: "Optionset",
    address2_freighttermscode: "Optionset",
    address2_shippingmethodcode: "Optionset",
    adx_partner_status: "Optionset",
    adx_partnerprogram_status: "Optionset",
    businesstypecode: "Optionset",
    customersizecode: "Optionset",
    customertypecode: "Optionset",
    dev1_accountlevel: "Optionset",
    dev1_multiselect: "MultiSelect",
    dev1_securedoptionset: "Optionset",
    industrycode: "Optionset",
    msdyn_travelchargetype: "Optionset",
    ownershipcode: "Optionset",
    paymenttermscode: "Optionset",
    preferredappointmentdaycode: "Optionset",
    preferredappointmenttimecode: "Optionset",
    preferredcontactmethodcode: "Optionset",
    sf365_accounttype: "MultiSelect",
    shippingmethodcode: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    territorycode: "Optionset",
    // Date Formats
    adx_partnerprogram_enddate: "DateOnly:UserLocal",
    adx_partnerprogram_startdate: "DateOnly:UserLocal",
    createdon: "DateAndTime:UserLocal",
    dev1_dateonlydateonly: "DateOnly:DateOnly",
    dev1_dateonlytimezoneindependent: "DateOnly:TimeZoneIndependent",
    dev1_dateonlyuserlocal: "DateOnly:UserLocal",
    dev1_datetimetimezoneindependent: "DateAndTime:TimeZoneIndependent",
    dev1_datetimeuserlocal: "DateAndTime:UserLocal",
    dev1_datetimeuserlocalchange: "DateAndTime:UserLocal",
    dev1_rollup_date: "DateAndTime:UserLocal",
    lastonholdtime: "DateAndTime:UserLocal",
    lastusedincampaign: "DateOnly:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    opendeals_date: "DateAndTime:UserLocal",
    openrevenue_date: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
  },
  navigation: {
    transactioncurrencyid: ["mscrm.transactioncurrency"],
    territoryid: ["mscrm.territory"],
    stageid_processstage: ["mscrm.processstage"],
    sla_account_sla: ["mscrm.sla"],
    sf365_SupplierId: ["mscrm.sf365_supplier"],
    sf365_LegalEntityId: ["mscrm.sf365_legalentity"],
    primarycontactid: ["mscrm.contact"],
    preferredsystemuserid: ["mscrm.systemuser"],
    preferredserviceid: ["mscrm.service"],
    preferredequipmentid: ["mscrm.equipment"],
    parentaccountid: ["mscrm.account"],
    owninguser: ["mscrm.systemuser"],
    owningteam: ["mscrm.team"],
    owningbusinessunit: ["mscrm.businessunit"],
    ownerid: ["mscrm.principal"],
    originatingleadid: ["mscrm.lead"],
    msdyn_workhourtemplate: ["mscrm.msdyn_workhourtemplate"],
    msdyn_serviceterritory: ["mscrm.territory"],
    msdyn_salestaxcode: ["mscrm.msdyn_taxcode"],
    msdyn_accountkpiid: ["mscrm.msdyn_accountkpiitem"],
    msdyn_PreferredResource: ["mscrm.bookableresource"],
    msa_managingpartnerid: ["mscrm.account"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    masterid: ["mscrm.account"],
    defaultpricelevelid: ["mscrm.pricelevel"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
    adx_CreatedByportalcontactId: ["mscrm.contact"],
    msdyn_billingaccount: ["account"],
    slainvokedid: ["sla"],
  },
};

// Attribute constants
export const enum AccountAttributes {
  AccountCategoryCode = "accountcategorycode",
  AccountClassificationCode = "accountclassificationcode",
  AccountId = "accountid",
  AccountNumber = "accountnumber",
  AccountRatingCode = "accountratingcode",
  Address1_AddressId = "address1_addressid",
  Address1_AddressTypeCode = "address1_addresstypecode",
  Address1_City = "address1_city",
  Address1_Composite = "address1_composite",
  Address1_Country = "address1_country",
  Address1_County = "address1_county",
  Address1_Fax = "address1_fax",
  Address1_FreightTermsCode = "address1_freighttermscode",
  Address1_Latitude = "address1_latitude",
  Address1_Line1 = "address1_line1",
  Address1_Line2 = "address1_line2",
  Address1_Line3 = "address1_line3",
  Address1_Longitude = "address1_longitude",
  Address1_Name = "address1_name",
  Address1_PostalCode = "address1_postalcode",
  Address1_PostOfficeBox = "address1_postofficebox",
  Address1_PrimaryContactName = "address1_primarycontactname",
  Address1_ShippingMethodCode = "address1_shippingmethodcode",
  Address1_StateOrProvince = "address1_stateorprovince",
  Address1_Telephone1 = "address1_telephone1",
  Address1_Telephone2 = "address1_telephone2",
  Address1_Telephone3 = "address1_telephone3",
  Address1_UPSZone = "address1_upszone",
  Address1_UTCOffset = "address1_utcoffset",
  Address2_AddressId = "address2_addressid",
  Address2_AddressTypeCode = "address2_addresstypecode",
  Address2_City = "address2_city",
  Address2_Composite = "address2_composite",
  Address2_Country = "address2_country",
  Address2_County = "address2_county",
  Address2_Fax = "address2_fax",
  Address2_FreightTermsCode = "address2_freighttermscode",
  Address2_Latitude = "address2_latitude",
  Address2_Line1 = "address2_line1",
  Address2_Line2 = "address2_line2",
  Address2_Line3 = "address2_line3",
  Address2_Longitude = "address2_longitude",
  Address2_Name = "address2_name",
  Address2_PostalCode = "address2_postalcode",
  Address2_PostOfficeBox = "address2_postofficebox",
  Address2_PrimaryContactName = "address2_primarycontactname",
  Address2_ShippingMethodCode = "address2_shippingmethodcode",
  Address2_StateOrProvince = "address2_stateorprovince",
  Address2_Telephone1 = "address2_telephone1",
  Address2_Telephone2 = "address2_telephone2",
  Address2_Telephone3 = "address2_telephone3",
  Address2_UPSZone = "address2_upszone",
  Address2_UTCOffset = "address2_utcoffset",
  adx_ActiveOpportunityCount = "adx_activeopportunitycount",
  adx_AverageTimetoCloseanOpportunity = "adx_averagetimetocloseanopportunity",
  Adx_CreatedByIPAddress = "adx_createdbyipaddress",
  adx_CreatedByportalcontactId = "adx_createdbyportalcontactid",
  adx_CreatedByportalcontactIdName = "adx_createdbyportalcontactidname",
  adx_CreatedByportalcontactIdYomiName = "adx_createdbyportalcontactidyominame",
  Adx_CreatedByUsername = "adx_createdbyusername",
  adx_CurrentPartnerCapacity = "adx_currentpartnercapacity",
  adx_FeedbackRate = "adx_feedbackrate",
  adx_LossRate = "adx_lossrate",
  adx_MaximumOpportunityRevenue = "adx_maximumopportunityrevenue",
  adx_maximumopportunityrevenue_Base = "adx_maximumopportunityrevenue_base",
  adx_MinimumOpportunityRevenue = "adx_minimumopportunityrevenue",
  adx_minimumopportunityrevenue_Base = "adx_minimumopportunityrevenue_base",
  Adx_ModifiedByIPAddress = "adx_modifiedbyipaddress",
  Adx_ModifiedByUsername = "adx_modifiedbyusername",
  adx_NumberofOpportunitiesAccepted = "adx_numberofopportunitiesaccepted",
  adx_NumberofOpportunitiesDeclined = "adx_numberofopportunitiesdeclined",
  adx_NumberofOpportunitiesDelivered = "adx_numberofopportunitiesdelivered",
  adx_NumberofOpportunitieswithFeedback = "adx_numberofopportunitieswithfeedback",
  adx_NumberofOpportunitiesWon = "adx_numberofopportunitieswon",
  adx_NumberofReturnedOpportunities = "adx_numberofreturnedopportunities",
  adx_partner_status = "adx_partner_status",
  adx_PartnerHasCapacity = "adx_partnerhascapacity",
  adx_partnerprogram_enddate = "adx_partnerprogram_enddate",
  adx_partnerprogram_startdate = "adx_partnerprogram_startdate",
  adx_partnerprogram_status = "adx_partnerprogram_status",
  adx_PartnerRanking = "adx_partnerranking",
  adx_ReturnRate = "adx_returnrate",
  adx_StallRate = "adx_stallrate",
  adx_TouchRate = "adx_touchrate",
  adx_WinRate = "adx_winrate",
  Aging30 = "aging30",
  Aging30_Base = "aging30_base",
  Aging60 = "aging60",
  Aging60_Base = "aging60_base",
  Aging90 = "aging90",
  Aging90_Base = "aging90_base",
  BusinessTypeCode = "businesstypecode",
  CreatedBy = "createdby",
  CreatedByExternalParty = "createdbyexternalparty",
  CreatedByExternalPartyName = "createdbyexternalpartyname",
  CreatedByExternalPartyYomiName = "createdbyexternalpartyyominame",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  CreditLimit = "creditlimit",
  CreditLimit_Base = "creditlimit_base",
  CreditOnHold = "creditonhold",
  CustomerSizeCode = "customersizecode",
  CustomerTypeCode = "customertypecode",
  DefaultPriceLevelId = "defaultpricelevelid",
  DefaultPriceLevelIdName = "defaultpricelevelidname",
  Description = "description",
  dev1_AccountLevel = "dev1_accountlevel",
  dev1_Calculated = "dev1_calculated",
  dev1_DateOnlyDateOnly = "dev1_dateonlydateonly",
  dev1_DateOnlyTimeZoneIndependent = "dev1_dateonlytimezoneindependent",
  dev1_DateOnlyUserLocal = "dev1_dateonlyuserlocal",
  dev1_DateTimeTimeZoneIndependent = "dev1_datetimetimezoneindependent",
  dev1_DateTimeUserLocal = "dev1_datetimeuserlocal",
  dev1_DateTimeUserLocalChange = "dev1_datetimeuserlocalchange",
  dev1_MultiSelect = "dev1_multiselect",
  dev1_NationalInsuranceNumber = "dev1_nationalinsurancenumber",
  dev1_NetworkView = "dev1_networkview",
  dev1_Rollup = "dev1_rollup",
  dev1_Rollup_Date = "dev1_rollup_date",
  dev1_Rollup_State = "dev1_rollup_state",
  dev1_SecuredOptionset = "dev1_securedoptionset",
  DoNotBulkEMail = "donotbulkemail",
  DoNotBulkPostalMail = "donotbulkpostalmail",
  DoNotEMail = "donotemail",
  DoNotFax = "donotfax",
  DoNotPhone = "donotphone",
  DoNotPostalMail = "donotpostalmail",
  DoNotSendMM = "donotsendmm",
  EMailAddress1 = "emailaddress1",
  EMailAddress2 = "emailaddress2",
  EMailAddress3 = "emailaddress3",
  EntityImage = "entityimage",
  EntityImage_Timestamp = "entityimage_timestamp",
  EntityImage_URL = "entityimage_url",
  EntityImageId = "entityimageid",
  ExchangeRate = "exchangerate",
  Fax = "fax",
  FollowEmail = "followemail",
  FtpSiteURL = "ftpsiteurl",
  ImportSequenceNumber = "importsequencenumber",
  IndustryCode = "industrycode",
  IsPrivate = "isprivate",
  LastOnHoldTime = "lastonholdtime",
  LastUsedInCampaign = "lastusedincampaign",
  MarketCap = "marketcap",
  MarketCap_Base = "marketcap_base",
  MarketingOnly = "marketingonly",
  MasterAccountIdName = "masteraccountidname",
  MasterAccountIdYomiName = "masteraccountidyominame",
  MasterId = "masterid",
  Merged = "merged",
  ModifiedBy = "modifiedby",
  ModifiedByExternalParty = "modifiedbyexternalparty",
  ModifiedByExternalPartyName = "modifiedbyexternalpartyname",
  ModifiedByExternalPartyYomiName = "modifiedbyexternalpartyyominame",
  ModifiedByName = "modifiedbyname",
  ModifiedByYomiName = "modifiedbyyominame",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  msa_managingpartnerid = "msa_managingpartnerid",
  msa_managingpartneridName = "msa_managingpartneridname",
  msa_managingpartneridYomiName = "msa_managingpartneridyominame",
  msdyn_accountkpiid = "msdyn_accountkpiid",
  msdyn_accountkpiidName = "msdyn_accountkpiidname",
  msdyn_BillingAccount = "msdyn_billingaccount",
  msdyn_BillingAccountName = "msdyn_billingaccountname",
  msdyn_BillingAccountYomiName = "msdyn_billingaccountyominame",
  msdyn_externalaccountid = "msdyn_externalaccountid",
  msdyn_gdproptout = "msdyn_gdproptout",
  msdyn_PreferredResource = "msdyn_preferredresource",
  msdyn_PreferredResourceName = "msdyn_preferredresourcename",
  msdyn_SalesTaxCode = "msdyn_salestaxcode",
  msdyn_SalesTaxCodeName = "msdyn_salestaxcodename",
  msdyn_ServiceTerritory = "msdyn_serviceterritory",
  msdyn_ServiceTerritoryName = "msdyn_serviceterritoryname",
  msdyn_TaxExempt = "msdyn_taxexempt",
  msdyn_TaxExemptNumber = "msdyn_taxexemptnumber",
  msdyn_TravelCharge = "msdyn_travelcharge",
  msdyn_travelcharge_Base = "msdyn_travelcharge_base",
  msdyn_TravelChargeType = "msdyn_travelchargetype",
  msdyn_workhourtemplate = "msdyn_workhourtemplate",
  msdyn_workhourtemplateName = "msdyn_workhourtemplatename",
  msdyn_WorkOrderInstructions = "msdyn_workorderinstructions",
  Name = "name",
  NumberOfEmployees = "numberofemployees",
  OnHoldTime = "onholdtime",
  OpenDeals = "opendeals",
  OpenDeals_Date = "opendeals_date",
  OpenDeals_State = "opendeals_state",
  OpenRevenue = "openrevenue",
  OpenRevenue_Base = "openrevenue_base",
  OpenRevenue_Date = "openrevenue_date",
  OpenRevenue_State = "openrevenue_state",
  OriginatingLeadId = "originatingleadid",
  OriginatingLeadIdName = "originatingleadidname",
  OriginatingLeadIdYomiName = "originatingleadidyominame",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwnerIdName = "owneridname",
  OwnerIdType = "owneridtype",
  OwnerIdYomiName = "owneridyominame",
  OwnershipCode = "ownershipcode",
  OwningBusinessUnit = "owningbusinessunit",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  ParentAccountId = "parentaccountid",
  ParentAccountIdName = "parentaccountidname",
  ParentAccountIdYomiName = "parentaccountidyominame",
  ParticipatesInWorkflow = "participatesinworkflow",
  PaymentTermsCode = "paymenttermscode",
  PreferredAppointmentDayCode = "preferredappointmentdaycode",
  PreferredAppointmentTimeCode = "preferredappointmenttimecode",
  PreferredContactMethodCode = "preferredcontactmethodcode",
  PreferredEquipmentId = "preferredequipmentid",
  PreferredEquipmentIdName = "preferredequipmentidname",
  PreferredServiceId = "preferredserviceid",
  PreferredServiceIdName = "preferredserviceidname",
  PreferredSystemUserId = "preferredsystemuserid",
  PreferredSystemUserIdName = "preferredsystemuseridname",
  PreferredSystemUserIdYomiName = "preferredsystemuseridyominame",
  PrimaryContactId = "primarycontactid",
  PrimaryContactIdName = "primarycontactidname",
  PrimaryContactIdYomiName = "primarycontactidyominame",
  PrimarySatoriId = "primarysatoriid",
  PrimaryTwitterId = "primarytwitterid",
  ProcessId = "processid",
  Revenue = "revenue",
  Revenue_Base = "revenue_base",
  sf365_AccountType = "sf365_accounttype",
  sf365_LegalEntityId = "sf365_legalentityid",
  sf365_LegalEntityIdName = "sf365_legalentityidname",
  sf365_SupplierId = "sf365_supplierid",
  sf365_SupplierIdName = "sf365_supplieridname",
  SharesOutstanding = "sharesoutstanding",
  ShippingMethodCode = "shippingmethodcode",
  SIC = "sic",
  SLAId = "slaid",
  SLAInvokedId = "slainvokedid",
  SLAInvokedIdName = "slainvokedidname",
  SLAName = "slaname",
  StageId = "stageid",
  StateCode = "statecode",
  StatusCode = "statuscode",
  StockExchange = "stockexchange",
  TeamsFollowed = "teamsfollowed",
  Telephone1 = "telephone1",
  Telephone2 = "telephone2",
  Telephone3 = "telephone3",
  TerritoryCode = "territorycode",
  TerritoryId = "territoryid",
  TerritoryIdName = "territoryidname",
  TickerSymbol = "tickersymbol",
  TimeSpentByMeOnEmailAndMeetings = "timespentbymeonemailandmeetings",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  TransactionCurrencyId = "transactioncurrencyid",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  TraversedPath = "traversedpath",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
  WebSiteURL = "websiteurl",
  YomiName = "yominame",
}

// Early Bound Interface
export interface Account extends IEntity {
  // Category account_account_accountcategorycode Select a category to indicate whether the customer account is standard or preferred.
  accountcategorycode?: import("../enums/account_account_accountcategorycode").account_account_accountcategorycode | null;
  // Classification account_account_accountclassificationcode Drop-down list for classifying an account.
  accountclassificationcode?: import("../enums/account_account_accountclassificationcode").account_account_accountclassificationcode | null;
  // Account UniqueidentifierType Unique identifier of the account.
  accountid?: import("dataverse-ify").Guid | null;
  // Account Number StringType Type an ID number or code for the account to quickly search and identify the account in system views.
  accountnumber?: string | null;
  // Account Rating account_account_accountratingcode Select a rating to indicate the value of the customer account.
  accountratingcode?: import("../enums/account_account_accountratingcode").account_account_accountratingcode | null;
  // Address 1: ID UniqueidentifierType Unique identifier for address 1.
  address1_addressid?: import("dataverse-ify").Guid | null;
  // Address 1: Address Type account_account_address1_addresstypecode Select the primary address type.
  address1_addresstypecode?: import("../enums/account_account_address1_addresstypecode").account_account_address1_addresstypecode | null;
  // Address 1: City StringType Type the city for the primary address.
  address1_city?: string | null;
  // Address 1 MemoType Shows the complete primary address.
  address1_composite?: string | null;
  // Address 1: Country/Region StringType Type the country or region for the primary address.
  address1_country?: string | null;
  // Address 1: County StringType Type the county for the primary address.
  address1_county?: string | null;
  // Address 1: Fax StringType Type the fax number associated with the primary address.
  address1_fax?: string | null;
  // Address 1: Freight Terms account_account_address1_freighttermscode Select the freight terms for the primary address to make sure shipping orders are processed correctly.
  address1_freighttermscode?: import("../enums/account_account_address1_freighttermscode").account_account_address1_freighttermscode | null;
  // Address 1: Latitude DoubleType Type the latitude value for the primary address for use in mapping and other applications.
  address1_latitude?: number | null;
  // Address 1: Street 1 StringType Type the first line of the primary address.
  address1_line1?: string | null;
  // Address 1: Street 2 StringType Type the second line of the primary address.
  address1_line2?: string | null;
  // Address 1: Street 3 StringType Type the third line of the primary address.
  address1_line3?: string | null;
  // Address 1: Longitude DoubleType Type the longitude value for the primary address for use in mapping and other applications.
  address1_longitude?: number | null;
  // Address 1: Name StringType Type a descriptive name for the primary address, such as Corporate Headquarters.
  address1_name?: string | null;
  // Address 1: ZIP/Postal Code StringType Type the ZIP Code or postal code for the primary address.
  address1_postalcode?: string | null;
  // Address 1: Post Office Box StringType Type the post office box number of the primary address.
  address1_postofficebox?: string | null;
  // Address 1: Primary Contact Name StringType Type the name of the main contact at the account's primary address.
  address1_primarycontactname?: string | null;
  // Address 1: Shipping Method account_account_address1_shippingmethodcode Select a shipping method for deliveries sent to this address.
  address1_shippingmethodcode?: import("../enums/account_account_address1_shippingmethodcode").account_account_address1_shippingmethodcode | null;
  // Address 1: State/Province StringType Type the state or province of the primary address.
  address1_stateorprovince?: string | null;
  // Address Phone StringType Type the main phone number associated with the primary address.
  address1_telephone1?: string | null;
  // Address 1: Telephone 2 StringType Type a second phone number associated with the primary address.
  address1_telephone2?: string | null;
  // Address 1: Telephone 3 StringType Type a third phone number associated with the primary address.
  address1_telephone3?: string | null;
  // Address 1: UPS Zone StringType Type the UPS zone of the primary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS.
  address1_upszone?: string | null;
  // Address 1: UTC Offset IntegerType Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address.
  address1_utcoffset?: number | null;
  // Address 2: ID UniqueidentifierType Unique identifier for address 2.
  address2_addressid?: import("dataverse-ify").Guid | null;
  // Address 2: Address Type account_account_address2_addresstypecode Select the secondary address type.
  address2_addresstypecode?: import("../enums/account_account_address2_addresstypecode").account_account_address2_addresstypecode | null;
  // Address 2: City StringType Type the city for the secondary address.
  address2_city?: string | null;
  // Address 2 MemoType Shows the complete secondary address.
  address2_composite?: string | null;
  // Address 2: Country/Region StringType Type the country or region for the secondary address.
  address2_country?: string | null;
  // Address 2: County StringType Type the county for the secondary address.
  address2_county?: string | null;
  // Address 2: Fax StringType Type the fax number associated with the secondary address.
  address2_fax?: string | null;
  // Address 2: Freight Terms account_account_address2_freighttermscode Select the freight terms for the secondary address to make sure shipping orders are processed correctly.
  address2_freighttermscode?: import("../enums/account_account_address2_freighttermscode").account_account_address2_freighttermscode | null;
  // Address 2: Latitude DoubleType Type the latitude value for the secondary address for use in mapping and other applications.
  address2_latitude?: number | null;
  // Address 2: Street 1 StringType Type the first line of the secondary address.
  address2_line1?: string | null;
  // Address 2: Street 2 StringType Type the second line of the secondary address.
  address2_line2?: string | null;
  // Address 2: Street 3 StringType Type the third line of the secondary address.
  address2_line3?: string | null;
  // Address 2: Longitude DoubleType Type the longitude value for the secondary address for use in mapping and other applications.
  address2_longitude?: number | null;
  // Address 2: Name StringType Type a descriptive name for the secondary address, such as Corporate Headquarters.
  address2_name?: string | null;
  // Address 2: ZIP/Postal Code StringType Type the ZIP Code or postal code for the secondary address.
  address2_postalcode?: string | null;
  // Address 2: Post Office Box StringType Type the post office box number of the secondary address.
  address2_postofficebox?: string | null;
  // Address 2: Primary Contact Name StringType Type the name of the main contact at the account's secondary address.
  address2_primarycontactname?: string | null;
  // Address 2: Shipping Method account_account_address2_shippingmethodcode Select a shipping method for deliveries sent to this address.
  address2_shippingmethodcode?: import("../enums/account_account_address2_shippingmethodcode").account_account_address2_shippingmethodcode | null;
  // Address 2: State/Province StringType Type the state or province of the secondary address.
  address2_stateorprovince?: string | null;
  // Address 2: Telephone 1 StringType Type the main phone number associated with the secondary address.
  address2_telephone1?: string | null;
  // Address 2: Telephone 2 StringType Type a second phone number associated with the secondary address.
  address2_telephone2?: string | null;
  // Address 2: Telephone 3 StringType Type a third phone number associated with the secondary address.
  address2_telephone3?: string | null;
  // Address 2: UPS Zone StringType Type the UPS zone of the secondary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS.
  address2_upszone?: string | null;
  // Address 2: UTC Offset IntegerType Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address.
  address2_utcoffset?: number | null;
  // Active Opportunity Count IntegerType
  adx_activeopportunitycount?: number | null;
  // Average Time to Close an Opportunity DoubleType
  adx_averagetimetocloseanopportunity?: number | null;
  // Created By (IP Address) StringType
  adx_createdbyipaddress?: string | null;
  // Created By (Portal Contact) LookupType Unique identifier for Contact associated with Account.
  adx_createdbyportalcontactid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  adx_createdbyportalcontactidname?: string | null;
  //  StringType
  adx_createdbyportalcontactidyominame?: string | null;
  // Created By (User Name) StringType
  adx_createdbyusername?: string | null;
  // Current Partner Capacity IntegerType
  adx_currentpartnercapacity?: number | null;
  // Feedback Rate DoubleType
  adx_feedbackrate?: number | null;
  // Loss Rate DoubleType
  adx_lossrate?: number | null;
  // Maximum Opportunity Revenue MoneyType
  adx_maximumopportunityrevenue?: number | null;
  // Maximum Opportunity Revenue (Base) MoneyType Value of the Maximum Opportunity Revenue in base currency.
  adx_maximumopportunityrevenue_base?: number | null;
  // Minimum Opportunity Revenue MoneyType
  adx_minimumopportunityrevenue?: number | null;
  // Minimum Opportunity Revenue (Base) MoneyType Value of the Minimum Opportunity Revenue in base currency.
  adx_minimumopportunityrevenue_base?: number | null;
  // Modified By (IP Address) StringType
  adx_modifiedbyipaddress?: string | null;
  // Modified By (User Name) StringType
  adx_modifiedbyusername?: string | null;
  // Number of Opportunities Accepted IntegerType
  adx_numberofopportunitiesaccepted?: number | null;
  // Number of Opportunities Declined IntegerType
  adx_numberofopportunitiesdeclined?: number | null;
  // Number of Opportunities Delivered IntegerType
  adx_numberofopportunitiesdelivered?: number | null;
  // Number of Opportunities with Feedback IntegerType
  adx_numberofopportunitieswithfeedback?: number | null;
  // Number of Opportunities Won IntegerType
  adx_numberofopportunitieswon?: number | null;
  // Number of Returned Opportunities IntegerType
  adx_numberofreturnedopportunities?: number | null;
  // Partner Status account_adx_account_adx_partner_status
  adx_partner_status?: import("../enums/account_adx_account_adx_partner_status").account_adx_account_adx_partner_status | null;
  // Partner Has Capacity BooleanType
  adx_partnerhascapacity?: boolean | null;
  // Partner Program End Date DateTimeType DateOnly:UserLocal
  adx_partnerprogram_enddate?: Date | null;
  // Partner Program Start Date DateTimeType DateOnly:UserLocal
  adx_partnerprogram_startdate?: Date | null;
  // Partner Program Status account_adx_account_adx_partnerprogram_status
  adx_partnerprogram_status?: import("../enums/account_adx_account_adx_partnerprogram_status").account_adx_account_adx_partnerprogram_status | null;
  // Partner Ranking DoubleType
  adx_partnerranking?: number | null;
  // Return Rate DoubleType
  adx_returnrate?: number | null;
  // Stall Rate DoubleType
  adx_stallrate?: number | null;
  // Touch Rate DoubleType
  adx_touchrate?: number | null;
  // Win Rate DoubleType
  adx_winrate?: number | null;
  // Aging 30 MoneyType For system use only.
  aging30?: number | null;
  // Aging 30 (Base) MoneyType The base currency equivalent of the aging 30 field.
  aging30_base?: number | null;
  // Aging 60 MoneyType For system use only.
  aging60?: number | null;
  // Aging 60 (Base) MoneyType The base currency equivalent of the aging 60 field.
  aging60_base?: number | null;
  // Aging 90 MoneyType For system use only.
  aging90?: number | null;
  // Aging 90 (Base) MoneyType The base currency equivalent of the aging 90 field.
  aging90_base?: number | null;
  // Business Type account_account_businesstypecode Select the legal designation or other business type of the account for contracts or reporting purposes.
  businesstypecode?: import("../enums/account_account_businesstypecode").account_account_businesstypecode | null;
  // Created By LookupType Shows who created the record.
  createdby?: import("dataverse-ify").EntityReference | null;
  // Created By (External Party) LookupType Shows the external party who created the record.
  createdbyexternalparty?: import("dataverse-ify").EntityReference | null;
  //  StringType
  createdbyexternalpartyname?: string | null;
  //  StringType
  createdbyexternalpartyyominame?: string | null;
  //  StringType
  createdbyname?: string | null;
  //  StringType
  createdbyyominame?: string | null;
  // Created On DateTimeType Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  createdon?: Date | null;
  // Created By (Delegate) LookupType Shows who created the record on behalf of another user.
  createdonbehalfby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Credit Limit MoneyType Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer.
  creditlimit?: number | null;
  // Credit Limit (Base) MoneyType Shows the credit limit converted to the system's default base currency for reporting purposes.
  creditlimit_base?: number | null;
  // Credit Hold BooleanType Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer.
  creditonhold?: boolean | null;
  // Customer Size account_account_customersizecode Select the size category or range of the account for segmentation and reporting purposes.
  customersizecode?: import("../enums/account_account_customersizecode").account_account_customersizecode | null;
  // Relationship Type account_account_customertypecode Select the category that best describes the relationship between the account and your organization.
  customertypecode?: import("../enums/account_account_customertypecode").account_account_customertypecode | null;
  // Product Price List LookupType Choose the default price list associated with the account to make sure the correct product prices for this customer are applied in sales opportunities, quotes, and orders.
  defaultpricelevelid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  defaultpricelevelidname?: string | null;
  // Description MemoType Type additional information to describe the account, such as an excerpt from the company's website.
  description?: string | null;
  // Account Level dev1_accountlevel
  dev1_accountlevel?: import("../enums/dev1_accountlevel").dev1_accountlevel | null;
  // Calculated IntegerType
  dev1_calculated?: number | null;
  // Date Only Date Only DateTimeType DateOnly:DateOnly
  dev1_dateonlydateonly?: Date | null;
  // Date Only Time Zone Independent DateTimeType DateOnly:TimeZoneIndependent
  dev1_dateonlytimezoneindependent?: Date | null;
  // Date Only User Local DateTimeType DateOnly:UserLocal
  dev1_dateonlyuserlocal?: Date | null;
  // Date Time Time Zone Independent DateTimeType DateAndTime:TimeZoneIndependent
  dev1_datetimetimezoneindependent?: Date | null;
  // Date Time User Local DateTimeType DateAndTime:UserLocal
  dev1_datetimeuserlocal?: Date | null;
  // DateTimeUserLocalChange DateTimeType DateAndTime:UserLocal
  dev1_datetimeuserlocalchange?: Date | null;
  // Multi Select msdyn_travelchargetype Multi option set
  dev1_multiselect?: import("../enums/msdyn_travelchargetype").msdyn_travelchargetype[] | null;
  // National Insurance Number StringType
  dev1_nationalinsurancenumber?: string | null;
  // NetworkView StringType
  dev1_networkview?: string | null;
  // Rollup IntegerType
  dev1_rollup?: number | null;
  // Rollup (Last Updated On) DateTimeType Last Updated time of rollup field Rollup. DateAndTime:UserLocal
  dev1_rollup_date?: Date | null;
  // Rollup (State) IntegerType State of rollup field Rollup.
  dev1_rollup_state?: number | null;
  // Secured Optionset dev1_securedoptionset
  dev1_securedoptionset?: import("../enums/dev1_securedoptionset").dev1_securedoptionset | null;
  // Do not allow Bulk Emails BooleanType Select whether the account allows bulk email sent through campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but is excluded from email.
  donotbulkemail?: boolean | null;
  // Do not allow Bulk Mails BooleanType Select whether the account allows bulk postal mail sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but will be excluded from the postal mail.
  donotbulkpostalmail?: boolean | null;
  // Do not allow Emails BooleanType Select whether the account allows direct email sent from Microsoft Dynamics 365.
  donotemail?: boolean | null;
  // Do not allow Faxes BooleanType Select whether the account allows faxes. If Do Not Allow is selected, the account will be excluded from fax activities distributed in marketing campaigns.
  donotfax?: boolean | null;
  // Do not allow Phone Calls BooleanType Select whether the account allows phone calls. If Do Not Allow is selected, the account will be excluded from phone call activities distributed in marketing campaigns.
  donotphone?: boolean | null;
  // Do not allow Mails BooleanType Select whether the account allows direct mail. If Do Not Allow is selected, the account will be excluded from letter activities distributed in marketing campaigns.
  donotpostalmail?: boolean | null;
  // Send Marketing Materials BooleanType Select whether the account accepts marketing materials, such as brochures or catalogs.
  donotsendmm?: boolean | null;
  // Email StringType Type the primary email address for the account.
  emailaddress1?: string | null;
  // Email Address 2 StringType Type the secondary email address for the account.
  emailaddress2?: string | null;
  // Email Address 3 StringType Type an alternate email address for the account.
  emailaddress3?: string | null;
  // Default Image ImageType Shows the default image for the record.
  entityimage?: string | null;
  //  BigIntType
  entityimage_timestamp?: number | null;
  //  StringType
  entityimage_url?: string | null;
  // Entity Image Id UniqueidentifierType For internal use only.
  entityimageid?: import("dataverse-ify").Guid | null;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number | null;
  // Fax StringType Type the fax number for the account.
  fax?: string | null;
  // Follow Email Activity BooleanType Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the account.
  followemail?: boolean | null;
  // FTP Site StringType Type the URL for the account's FTP site to enable users to access data and share documents.
  ftpsiteurl?: string | null;
  // Import Sequence Number IntegerType Unique identifier of the data import or data migration that created this record.
  importsequencenumber?: number | null;
  // Industry account_account_industrycode Select the account's primary industry for use in marketing segmentation and demographic analysis.
  industrycode?: import("../enums/account_account_industrycode").account_account_industrycode | null;
  //  BooleanType
  isprivate?: boolean | null;
  // Last On Hold Time DateTimeType Contains the date and time stamp of the last on hold time. DateAndTime:UserLocal
  lastonholdtime?: Date | null;
  // Last Date Included in Campaign DateTimeType Shows the date when the account was last included in a marketing campaign or quick campaign. DateOnly:UserLocal
  lastusedincampaign?: Date | null;
  // Market Capitalization MoneyType Type the market capitalization of the account to identify the company's equity, used as an indicator in financial performance analysis.
  marketcap?: number | null;
  // Market Capitalization (Base) MoneyType Shows the market capitalization converted to the system's default base currency.
  marketcap_base?: number | null;
  // Marketing Only BooleanType Whether is only for marketing
  marketingonly?: boolean | null;
  //  StringType
  masteraccountidname?: string | null;
  //  StringType
  masteraccountidyominame?: string | null;
  // Master ID LookupType Shows the master account that the account was merged with.
  masterid?: import("dataverse-ify").EntityReference | null;
  // Merged BooleanType Shows whether the account has been merged with another account.
  merged?: boolean | null;
  // Modified By LookupType Shows who last updated the record.
  modifiedby?: import("dataverse-ify").EntityReference | null;
  // Modified By (External Party) LookupType Shows the external party who modified the record.
  modifiedbyexternalparty?: import("dataverse-ify").EntityReference | null;
  //  StringType
  modifiedbyexternalpartyname?: string | null;
  //  StringType
  modifiedbyexternalpartyyominame?: string | null;
  //  StringType
  modifiedbyname?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Modified On DateTimeType Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Modified By (Delegate) LookupType Shows who created the record on behalf of another user.
  modifiedonbehalfby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // Managing Partner LookupType Unique identifier for Account associated with Account.
  msa_managingpartnerid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  msa_managingpartneridname?: string | null;
  //  StringType
  msa_managingpartneridyominame?: string | null;
  // KPI LookupType
  msdyn_accountkpiid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  msdyn_accountkpiidname?: string | null;
  // Billing Account LookupType Reference to an other account to be used for billing (only to be used if billing account differs)
  msdyn_billingaccount?: import("dataverse-ify").EntityReference | null;
  //  StringType
  msdyn_billingaccountname?: string | null;
  //  StringType
  msdyn_billingaccountyominame?: string | null;
  // External ID StringType External Account ID from other systems.
  msdyn_externalaccountid?: string | null;
  // GDPR Optout BooleanType Describes whether account is opted out or not
  msdyn_gdproptout?: boolean | null;
  // Preferred Resource (Deprecated) LookupType
  msdyn_preferredresource?: import("dataverse-ify").EntityReference | null;
  //  StringType
  msdyn_preferredresourcename?: string | null;
  // Sales Tax Code LookupType Default Sales Tax Code
  msdyn_salestaxcode?: import("dataverse-ify").EntityReference | null;
  //  StringType
  msdyn_salestaxcodename?: string | null;
  // Service Territory LookupType The Service Territory this account belongs to. This is used to optimize scheduling and routing
  msdyn_serviceterritory?: import("dataverse-ify").EntityReference | null;
  //  StringType
  msdyn_serviceterritoryname?: string | null;
  // Tax Exempt BooleanType Select whether the account is tax exempt.
  msdyn_taxexempt?: boolean | null;
  // Tax Exempt Number StringType Shows the government tax exempt number.
  msdyn_taxexemptnumber?: string | null;
  // Travel Charge MoneyType Enter the travel charge to include on work orders. This value will be multiplied by the travel charge type.
  msdyn_travelcharge?: number | null;
  // Travel Charge (Base) MoneyType Value of the Travel Charge in base currency.
  msdyn_travelcharge_base?: number | null;
  // Travel Charge Type msdyn_travelchargetype Specify how travel is charged for this account.
  msdyn_travelchargetype?: import("../enums/msdyn_travelchargetype").msdyn_travelchargetype | null;
  // Work Hour Template LookupType
  msdyn_workhourtemplate?: import("dataverse-ify").EntityReference | null;
  //  StringType
  msdyn_workhourtemplatename?: string | null;
  // Work Order Instructions MemoType Shows the default instructions to show on new work orders.
  msdyn_workorderinstructions?: string | null;
  // Account Name [Required] StringType Type the company or business name.
  name?: string;
  // Number of Employees IntegerType Type the number of employees that work at the account for use in marketing segmentation and demographic analysis.
  numberofemployees?: number | null;
  // On Hold Time (Minutes) IntegerType Shows how long, in minutes, that the record was on hold.
  onholdtime?: number | null;
  // Open Deals IntegerType Number of open opportunities against an account and its child accounts.
  opendeals?: number | null;
  // Open Deals (Last Updated On) DateTimeType Last Updated time of rollup field Open Deals. DateAndTime:UserLocal
  opendeals_date?: Date | null;
  // Open Deals (State) IntegerType State of rollup field Open Deals.
  opendeals_state?: number | null;
  // Open Revenue MoneyType Sum of open revenue against an account and its child accounts.
  openrevenue?: number | null;
  // Open Revenue (Base) MoneyType Value of the Open Revenue in base currency.
  openrevenue_base?: number | null;
  // Open Revenue (Last Updated On) DateTimeType Last Updated time of rollup field Open Revenue. DateAndTime:UserLocal
  openrevenue_date?: Date | null;
  // Open Revenue (State) IntegerType State of rollup field Open Revenue.
  openrevenue_state?: number | null;
  // Originating Lead LookupType Shows the lead that the account was created from if the account was created by converting a lead in Microsoft Dynamics 365. This is used to relate the account to data on the originating lead for use in reporting and analytics.
  originatingleadid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  originatingleadidname?: string | null;
  //  StringType
  originatingleadidyominame?: string | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Owner OwnerType Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user.
  ownerid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  owneridname?: string | null;
  //  EntityNameType
  owneridtype?: string | null;
  //  StringType
  owneridyominame?: string | null;
  // Ownership account_account_ownershipcode Select the account's ownership structure, such as public or private.
  ownershipcode?: import("../enums/account_account_ownershipcode").account_account_ownershipcode | null;
  // Owning Business Unit LookupType Shows the business unit that the record owner belongs to.
  owningbusinessunit?: import("dataverse-ify").EntityReference | null;
  // Owning Team LookupType Unique identifier of the team who owns the account.
  owningteam?: import("dataverse-ify").EntityReference | null;
  // Owning User LookupType Unique identifier of the user who owns the account.
  owninguser?: import("dataverse-ify").EntityReference | null;
  // Parent Account LookupType Choose the parent account associated with this account to show parent and child businesses in reporting and analytics.
  parentaccountid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  parentaccountidname?: string | null;
  //  StringType
  parentaccountidyominame?: string | null;
  // Participates in Workflow BooleanType For system use only. Legacy Microsoft Dynamics CRM 3.0 workflow data.
  participatesinworkflow?: boolean | null;
  // Payment Terms account_account_paymenttermscode Select the payment terms to indicate when the customer needs to pay the total amount.
  paymenttermscode?: import("../enums/account_account_paymenttermscode").account_account_paymenttermscode | null;
  // Preferred Day account_account_preferredappointmentdaycode Select the preferred day of the week for service appointments.
  preferredappointmentdaycode?: import("../enums/account_account_preferredappointmentdaycode").account_account_preferredappointmentdaycode | null;
  // Preferred Time account_account_preferredappointmenttimecode Select the preferred time of day for service appointments.
  preferredappointmenttimecode?: import("../enums/account_account_preferredappointmenttimecode").account_account_preferredappointmenttimecode | null;
  // Preferred Method of Contact account_account_preferredcontactmethodcode Select the preferred method of contact.
  preferredcontactmethodcode?: import("../enums/account_account_preferredcontactmethodcode").account_account_preferredcontactmethodcode | null;
  // Preferred Facility/Equipment LookupType Choose the account's preferred service facility or equipment to make sure services are scheduled correctly for the customer.
  preferredequipmentid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  preferredequipmentidname?: string | null;
  // Preferred Service LookupType Choose the account's preferred service for reference when you schedule service activities.
  preferredserviceid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  preferredserviceidname?: string | null;
  // Preferred User LookupType Choose the preferred service representative for reference when you schedule service activities for the account.
  preferredsystemuserid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  preferredsystemuseridname?: string | null;
  //  StringType
  preferredsystemuseridyominame?: string | null;
  // Primary Contact LookupType Choose the primary contact for the account to provide quick access to contact details.
  primarycontactid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  primarycontactidname?: string | null;
  //  StringType
  primarycontactidyominame?: string | null;
  // Primary Satori ID StringType Primary Satori ID for Account
  primarysatoriid?: string | null;
  // Primary Twitter ID StringType Primary Twitter ID for Account
  primarytwitterid?: string | null;
  // Process UniqueidentifierType Shows the ID of the process.
  processid?: import("dataverse-ify").Guid | null;
  // Annual Revenue MoneyType Type the annual revenue for the account, used as an indicator in financial performance analysis.
  revenue?: number | null;
  // Annual Revenue (Base) MoneyType Shows the annual revenue converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area.
  revenue_base?: number | null;
  // Account Type account_sf365_account_sf365_accounttype
  sf365_accounttype?: import("../enums/account_sf365_account_sf365_accounttype").account_sf365_account_sf365_accounttype[] | null;
  // Legal Entity LookupType Unique identifier for Legal Entity associated with Account.
  sf365_legalentityid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  sf365_legalentityidname?: string | null;
  // Supplier LookupType Unique identifier for Supplier associated with Account.
  sf365_supplierid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  sf365_supplieridname?: string | null;
  // Shares Outstanding IntegerType Type the number of shares available to the public for the account. This number is used as an indicator in financial performance analysis.
  sharesoutstanding?: number | null;
  // Shipping Method account_account_shippingmethodcode Select a shipping method for deliveries sent to the account's address to designate the preferred carrier or other delivery option.
  shippingmethodcode?: import("../enums/account_account_shippingmethodcode").account_account_shippingmethodcode | null;
  // SIC Code StringType Type the Standard Industrial Classification (SIC) code that indicates the account's primary industry of business, for use in marketing segmentation and demographic analysis.
  sic?: string | null;
  // SLA LookupType Choose the service level agreement (SLA) that you want to apply to the Account record.
  slaid?: import("dataverse-ify").EntityReference | null;
  // Last SLA applied LookupType Last SLA that was applied to this case. This field is for internal use only.
  slainvokedid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  slainvokedidname?: string | null;
  //  StringType
  slaname?: string | null;
  // (Deprecated) Process Stage UniqueidentifierType Shows the ID of the stage.
  stageid?: import("dataverse-ify").Guid | null;
  // Status account_account_statecode Shows whether the account is active or inactive. Inactive accounts are read-only and can't be edited unless they are reactivated.
  statecode?: import("../enums/account_account_statecode").account_account_statecode | null;
  // Status Reason account_account_statuscode Select the account's status.
  statuscode?: import("../enums/account_account_statuscode").account_account_statuscode | null;
  // Stock Exchange StringType Type the stock exchange at which the account is listed to track their stock and financial performance of the company.
  stockexchange?: string | null;
  // TeamsFollowed IntegerType Number of users or conversations followed the record
  teamsfollowed?: number | null;
  // Main Phone StringType Type the main phone number for this account.
  telephone1?: string | null;
  // Other Phone StringType Type a second phone number for this account.
  telephone2?: string | null;
  // Telephone 3 StringType Type a third phone number for this account.
  telephone3?: string | null;
  // Territory Code account_account_territorycode Select a region or territory for the account for use in segmentation and analysis.
  territorycode?: import("../enums/account_account_territorycode").account_account_territorycode | null;
  // Territory LookupType Choose the sales region or territory for the account to make sure the account is assigned to the correct representative and for use in segmentation and analysis.
  territoryid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  territoryidname?: string | null;
  // Ticker Symbol StringType Type the stock exchange symbol for the account to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money.
  tickersymbol?: string | null;
  // Time Spent by me StringType Total time spent for emails (read and write) and meetings by me in relation to account record.
  timespentbymeonemailandmeetings?: string | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // Currency LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // (Deprecated) Traversed Path StringType For internal use only.
  traversedpath?: string | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version Number BigIntType Version number of the account.
  versionnumber?: number | null;
  // Website StringType Type the account's website URL to get quick details about the company profile.
  websiteurl?: string | null;
  // Yomi Account Name StringType Type the phonetic spelling of the company name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications.
  yominame?: string | null;
}
