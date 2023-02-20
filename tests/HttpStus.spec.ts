import assert from 'assert';
import { HttpStatus } from './../src/index';

describe('HttpStatus tests', function () {
  it('get HttpStatus.Continue should return 100', function () {
    assert.equal(HttpStatus.Continue, 100);
  });

  it('get HttpStatus.SwitchingProtocols should return 101', function () {
    assert.equal(HttpStatus.SwitchingProtocols, 101);
  });

  it('get HttpStatus.Processing should return 102', function () {
    assert.equal(HttpStatus.Processing, 102);
  });

  it('get HttpStatus.Ok should return 200', function () {
    assert.equal(HttpStatus.Ok, 200);
  });

  it('get HttpStatus.Created should return 201', function () {
    assert.equal(HttpStatus.Created, 201);
  });

  it('get HttpStatus.Accepted should return 202', function () {
    assert.equal(HttpStatus.Accepted, 202);
  });

  it('get HttpStatus.NonAuthoritativeInformation should return 202', function () {
    assert.equal(HttpStatus.NonAuthoritativeInformation, 203);
  });

  it('get HttpStatus.NoContent should return 204', function () {
    assert.equal(HttpStatus.NoContent, 204);
  });

  it('get HttpStatus.ResetContent should return 205', function () {
    assert.equal(HttpStatus.ResetContent, 205);
  });

  it('get HttpStatus.PartialContent should return 206', function () {
    assert.equal(HttpStatus.PartialContent, 206);
  });

  it('get HttpStatus.MultiStatus should return 207', function () {
    assert.equal(HttpStatus.MultiStatus, 207);
  });

  it('get HttpStatus.Created should return 208', function () {
    assert.equal(HttpStatus.AlreadyReported, 208);
  });

  it('get HttpStatus.ImUsed should return 226', function () {
    assert.equal(HttpStatus.ImUsed, 226);
  });

  it('get HttpStatus.MultipleChoices should return 300', function () {
    assert.equal(HttpStatus.MultipleChoices, 300);
  });

  it('get HttpStatus.MovedPermanently should return 301', function () {
    assert.equal(HttpStatus.MovedPermanently, 301);
  });

  it('get HttpStatus.Found should return 302', function () {
    assert.equal(HttpStatus.Found, 302);
  });

  it('get HttpStatus.SeeOther should return 303', function () {
    assert.equal(HttpStatus.SeeOther, 303);
  });

  it('get HttpStatus.NotModified should return 304', function () {
    assert.equal(HttpStatus.NotModified, 304);
  });

  it('get HttpStatus.UseProxy should return 305', function () {
    assert.equal(HttpStatus.UseProxy, 305);
  });

  it('get HttpStatus.SwitchProxy should return 306', function () {
    assert.equal(HttpStatus.SwitchProxy, 306);
  });

  it('get HttpStatus.TemporaryRedirect should return 307', function () {
    assert.equal(HttpStatus.TemporaryRedirect, 307);
  });

  it('get HttpStatus.PermanentRedirect should return 308', function () {
    assert.equal(HttpStatus.PermanentRedirect, 308);
  });

  it('get HttpStatus.BadRequest should return 400', function () {
    assert.equal(HttpStatus.BadRequest, 400);
  });

  it('get HttpStatus.Unauthorized should return 401', function () {
    assert.equal(HttpStatus.Unauthorized, 401);
  });

  it('get HttpStatus.PaymentRequired should return 402', function () {
    assert.equal(HttpStatus.PaymentRequired, 402);
  });

  it('get HttpStatus.Forbidden should return 403', function () {
    assert.equal(HttpStatus.Forbidden, 403);
  });

  it('get HttpStatus.NotFound should return 404', function () {
    assert.equal(HttpStatus.NotFound, 404);
  });

  it('get HttpStatus.MethodNotAllowed should return 405', function () {
    assert.equal(HttpStatus.MethodNotAllowed, 405);
  });

  it('get HttpStatus.NotAcceptable should return 406', function () {
    assert.equal(HttpStatus.NotAcceptable, 406);
  });

  it('get HttpStatus.ProxyAuthenticationRequired should return 407', function () {
    assert.equal(HttpStatus.ProxyAuthenticationRequired, 407);
  });

  it('get HttpStatus.RequestTimeout should return 408', function () {
    assert.equal(HttpStatus.RequestTimeout, 408);
  });

  it('get HttpStatus.Conflict should return 409', function () {
    assert.equal(HttpStatus.Conflict, 409);
  });

  it('get HttpStatus.Gone should return 410', function () {
    assert.equal(HttpStatus.Gone, 410);
  });

  it('get HttpStatus.LengthRequired should return 411', function () {
    assert.equal(HttpStatus.LengthRequired, 411);
  });

  it('get HttpStatus.PreconditionFailed should return 412', function () {
    assert.equal(HttpStatus.PreconditionFailed, 412);
  });

  it('get HttpStatus.PayloadTooLarge should return 413', function () {
    assert.equal(HttpStatus.PayloadTooLarge, 413);
  });

  it('get HttpStatus.UriTooLong should return 414', function () {
    assert.equal(HttpStatus.UriTooLong, 414);
  });

  it('get HttpStatus.UnsupportedMediaType should return 415', function () {
    assert.equal(HttpStatus.UnsupportedMediaType, 415);
  });

  it('get HttpStatus.RangeNotSatisfiable should return 416', function () {
    assert.equal(HttpStatus.RangeNotSatisfiable, 416);
  });

  it('get HttpStatus.ExpectationFailed should return 417', function () {
    assert.equal(HttpStatus.ExpectationFailed, 417);
  });

  it('get HttpStatus.IAmATeapot should return 418', function () {
    assert.equal(HttpStatus.IAmATeapot, 418);
  });

  it('get HttpStatus.MisdirectedRequest should return 421', function () {
    assert.equal(HttpStatus.MisdirectedRequest, 421);
  });

  it('get HttpStatus.UnprocessableEntity should return 422', function () {
    assert.equal(HttpStatus.UnprocessableEntity, 422);
  });

  it('get HttpStatus.Locked should return 423', function () {
    assert.equal(HttpStatus.Locked, 423);
  });

  it('get HttpStatus.FailedDependency should return 424', function () {
    assert.equal(HttpStatus.FailedDependency, 424);
  });

  it('get HttpStatus.UpgradeRequired should return 426', function () {
    assert.equal(HttpStatus.UpgradeRequired, 426);
  });

  it('get HttpStatus.PreconditionRequired should return 428', function () {
    assert.equal(HttpStatus.PreconditionRequired, 428);
  });

  it('get HttpStatus.TooManyRequests should return 429', function () {
    assert.equal(HttpStatus.TooManyRequests, 429);
  });

  it('get HttpStatus.RequestHeaderFieldsTooLarge should return 431', function () {
    assert.equal(HttpStatus.RequestHeaderFieldsTooLarge, 431);
  });

  it('get HttpStatus.UnavailableForLegalReasons should return 451', function () {
    assert.equal(HttpStatus.UnavailableForLegalReasons, 451);
  });

  it('get HttpStatus.InternalServerError should return 500', function () {
    assert.equal(HttpStatus.InternalServerError, 500);
  });

  it('get HttpStatus.NotImplemented should return 501', function () {
    assert.equal(HttpStatus.NotImplemented, 501);
  });

  it('get HttpStatus.BadGateway should return 502', function () {
    assert.equal(HttpStatus.BadGateway, 502);
  });

  it('get HttpStatus.ServiceUnavailable should return 503', function () {
    assert.equal(HttpStatus.ServiceUnavailable, 503);
  });

  it('get HttpStatus.GatewayTimeout should return 504', function () {
    assert.equal(HttpStatus.GatewayTimeout, 504);
  });

  it('get HttpStatus.HttpVersionNotSupported should return 505', function () {
    assert.equal(HttpStatus.HttpVersionNotSupported, 505);
  });

  it('get HttpStatus.VariantAlsoNegotiates should return 506', function () {
    assert.equal(HttpStatus.VariantAlsoNegotiates, 506);
  });

  it('get HttpStatus.InsufficientStorage should return 507', function () {
    assert.equal(HttpStatus.InsufficientStorage, 507);
  });

  it('get HttpStatus.LoopDetected should return 508', function () {
    assert.equal(HttpStatus.LoopDetected, 508);
  });

  it('get HttpStatus.NotExtended should return 510', function () {
    assert.equal(HttpStatus.NotExtended, 510);
  });

  it('get HttpStatus.NetworkAuthenticationRequired should return 511', function () {
    assert.equal(HttpStatus.NetworkAuthenticationRequired, 511);
  });
});
