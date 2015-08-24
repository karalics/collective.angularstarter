from zope.interface import Interface

class IFhnwAngularsolrLayer(Interface):
    """ Marker interface """

class IFhnwAngularsolrDevelLayer(IFhnwAngularsolrLayer):
    """ Marker interface """

class IFhnwAngularsolrProductionLayer(IFhnwAngularsolrLayer):
    """ Marker interface """
