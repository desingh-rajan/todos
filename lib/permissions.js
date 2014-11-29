ownsDocument = function (userID, doc) {
    return doc && doc.userId === userID;
};